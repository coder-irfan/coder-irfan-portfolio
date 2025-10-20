import express from "express";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import cors from "cors";
import rateLimit from "express-rate-limit";
import path from "path";
import i18next from "i18next";
import Backend from "i18next-fs-backend";
import middleware from "i18next-http-middleware";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://coder-irfan-portfolio.onrender.com",
    ],
    methods: ["POST"],
  })
);
app.use(express.json());

i18next
  .use(Backend)
  .use(middleware.LanguageDetector)
  .init({
    fallbackLng: "en",
    preload: ["en", "es", "ps", "fa", "ar"],
    backend: {
      loadPath: path.join(process.cwd(), "locales/{{lng}}.json"),
    },
    detection: {
      order: ["header", "querystring", "body"],
      caches: false,
    },
  });

app.use(middleware.handle(i18next));

const limiter = rateLimit({
  windowMs: 60 * 1000, // 1 munute
  max: 3,
  success: false,
  handler: (req, res) => {
    const t = req.t;
    res.status(429).json({ success: false, message: t("rateLimit") });
  },
});

app.post("/api/contact", limiter, async (req, res) => {
  const { fullname, phone, email, budget, comments } = req.body;
  const t = req.t;

  if (!fullname || !phone || !email || !budget) {
    return res.status(400).json({ message: t("missingFields") });
  }

  if (!email.includes("@")) {
    return res.status(400).json({ message: t("invalidEmail") });
  }

  // Protect from simple injection or span
  const dangerousChars = /(<|>|{|}|`|;)/;
  if (dangerousChars.test(fullname + phone + email + budget)) {
    return res
      .status(400)
      .json({ success: false, message: t("invalidInputs") });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `New Contact Message from ${fullname}`,
      html: `
    <div style="font-family: Syne, sans-serif; background-color: #131314; color: #F7F7F7; padding: 30px;">
      <div style="max-width: 600px; margin: auto; background-color: #1c1c1d; border-radius: 12px; overflow: hidden; box-shadow: 0 0 15px rgba(0,0,0,0.3);">
        
        <div style="background-color: #123f6c; padding: 16px; text-align: center;">
          <h2 style="margin: 0; color: #131314;">New Contact Form Submission</h2>
        </div>
        
        <div style="padding: 20px; line-height: 1.6; color: #D9D9D9;">
          <p><strong style="color: #F7F7F7;">Name:</strong> ${fullname}</p>
          <p><strong style="color: #F7F7F7;">Phone:</strong> ${phone}</p>
          <p><strong style="color: #F7F7F7;">Email:</strong> ${email}</p>
          <p><strong style="color: #F7F7F7;">Budget:</strong> ${budget}</p>
          <p><strong style="color: #F7F7F7;">Message:</strong> ${
            comments || "No message provided"
          }</p>
        </div>
        
        <div style="background-color: #266eb7; text-align: center; padding: 15px; color: #F7F7F7; font-size: 14px;">
          Portfolio Contact Form
        </div>
      </div>
    </div>
  `,
    });

    res.status(200).json({ success: true, message: t("success") });
  } catch (error) {
    console.error("Nodemailer error:", error);
    res.status(500).json({ message: t("error") });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

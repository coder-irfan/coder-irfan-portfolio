import React from "react";
import { useTranslation } from "react-i18next";
import {
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaLinkedinIn,
  FaTelegram,
  FaGithub,
} from "react-icons/fa";

function Footer({ getDirection }) {
  const { t } = useTranslation();

  return (
    <>
      <footer
        dir={getDirection()}
        className="relative bg-stars-bg bg-no-repeat bg-cover px-4 sm:px-6 md:px-8 lg:px-16 pt-10 md:pt-14 lg:pt-24"
      >
        <img
          src="images/saturn.webp"
          alt="saturn logo"
          className="absolute -top-16 md:-top-24 lg:-top-32 w-28 md:w-40 lg:w-60 brightness-75"
        />
        <div className="space-y-8 xl:space-y-16">
          <div className="space-y-3 xl:space-y-6 text-center">
            <h3 className="text-h3">{t("connect")}</h3>
            <div className="flex flex-wrap justify-center items-center gap-2 lg:gap-4 text-xl md:text-2xl xl:text-3xl">
              <a
                href="https://www.instagram.com/coder_irfan/"
                className="media-link"
                target="_blank"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.linkedin.com/in/mohammad-irfan-noorzada-ba5405281/"
                className="media-link"
                target="_blank"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://www.youtube.com/@coder_irfan1"
                className="media-link"
                target="_blank"
              >
                <FaYoutube />
              </a>
              <a
                href="https://github.com/coder-irfan"
                className="media-link"
                target="_blank"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.facebook.com/coderIrfan1"
                className="media-link"
                target="_blank"
              >
                <FaFacebook />
              </a>
              <a
                href="https://t.me/theweblab?fbclid=PAZXh0bgNhZW0CMTEAAafiHL_ligF8P85-BXN5OEtZgIMs6XAVwNoAC5h6s-kM-0UzHQQmLwoLofz2yQ_aem_ZdZMzgfD2w_M4Hntt-FMrg"
                className="media-link"
                target="_blank"
              >
                <FaTelegram />
              </a>
            </div>
          </div>

          <div className="flex items-center justify-center border-t border-t-colors-textSecondary/50 py-4 xl:py-6">
            <p className="text-sm md:text-base">
              © {new Date().getFullYear()} {t("rights")}
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;

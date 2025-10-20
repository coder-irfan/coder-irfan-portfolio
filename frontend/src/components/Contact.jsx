import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";
import { FaPaperPlane } from "react-icons/fa";

function Contact({ getDirection }) {
  const { t, i18n } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setError,
  } = useForm();

  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const res = await axios.post(
        "https://coder-irfan-portfolio-backend.onrender.com/api/contact",
        {
          ...data,
        },
        {
          headers: {
            "Accept-Language": i18n.language,
          },
        }
      );
      if (res.data.success) {
        toast.success(res.data.message);
        reset();
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      if (error.response?.data?.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Something went wrong!");
      }
    } finally {
      setLoading(false);
    }
  };

  const onError = (errors) => {
    Object.values(errors).forEach((err) => toast.error(err.message));
  };

  // Watch for language change on errors
  useEffect(() => {
    Object.keys(errors).forEach((field) => {
      setError(field, {
        type: errors[field].type,
        message: t(`${field}Error`),
      });
    });
  }, [i18n.language]);

  return (
    <>
      <section
        dir={getDirection()}
        id="contact"
        className="relative w-full px-4 sm:px-6 md:px-8 lg:px-16 pt-10 pb-16 md:py-14 md:pb-24 lg:py-24 max-w-[85rem] 2xl:max-w-[88rem] mx-auto"
      >
        <div className="absolute top-10 left-0 lg:left-[-5rem] bg-colors-darkMatisse w-28 h-28 lg:w-52 lg:h-52 blur-[100px] rounded-full -z-10"></div>
        <div className="absolute bottom-10 right-0 lg:right-[-5rem] bg-colors-darkMatisse w-28 h-28 lg:w-52 lg:h-52 blur-[100px] rounded-full -z-10"></div>
        <div className="space-y-8 sm:space-y-10 md:space-y-12 lg:space-y-14">
          <div className="flex items-center text-center justify-center gap-4">
            <img
              src="images/line.webp"
              alt="line"
              className="w-10 sm:w-40 md:w-56 lg:w-64"
            />
            <h2 className="font-heading text-h2 font-bold">
              {t("Contact Me")}
            </h2>
            <img
              src="images/line.webp"
              alt="line"
              className="w-10 sm:w-40 md:w-56 lg:w-64"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8">
            <div className="max-w-4xl order-1 lg:-order-1">
              <form
                className="flex flex-col gap-4 lg:gap-5"
                onSubmit={handleSubmit(onSubmit, onError)}
              >
                <div className="flex items-center justify-center gap-2">
                  <div className="space-y-2 w-full sm:w-1/2">
                    <label htmlFor="fullName" className="text-sm lg:text-base">
                      {t("fullnameLabel")}
                    </label>
                    <div className="">
                      <input
                        placeholder={t("fullnamePlaceholder")}
                        id="fullName"
                        type="text"
                        className={`input ${
                          errors.fullname ? "!border-red" : ""
                        }`}
                        {...register("fullname", {
                          required: t("fullnameError"),
                        })}
                      />
                    </div>
                    {errors.fullname && (
                      <p className="error">{errors.fullname.message}</p>
                    )}
                  </div>

                  <div className="space-y-2 w-full sm:w-1/2">
                    <label htmlFor="phone" className="text-sm lg:text-base">
                      {t("phoneLabel")}
                    </label>
                    <div className="" dir={getDirection()}>
                      <input
                        placeholder={t("phonePlaceholder")}
                        type="tel"
                        id="phone"
                        className={`input ${errors.phone ? "!border-red" : ""}`}
                        {...register("phone", {
                          required: t("phoneError"),
                        })}
                      />
                    </div>
                    {errors.phone && (
                      <p className="error">{errors.phone.message}</p>
                    )}
                  </div>
                </div>

                <div className="space-y-2 w-full">
                  <label className="text-sm lg:text-base">
                    {t("emailLabel")}
                  </label>
                  <div className="">
                    <input
                      placeholder={t("emailPlaceholder")}
                      type="email"
                      autoComplete="off"
                      className={`input ${errors.email ? "!border-red" : ""}`}
                      {...register("email", {
                        required: t("emailError"),
                        pattern: {
                          value:
                            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                          message: t("emailValidationError"),
                        },
                      })}
                    />
                  </div>
                  {errors.email && (
                    <p className="error">{errors.email.message}</p>
                  )}
                </div>

                <div className="space-y-2 w-full">
                  <label htmlFor="budget" className="text-sm lg:text-base">
                    {t("budgetLabel")}
                  </label>
                  <div className="">
                    <select
                      name="budget"
                      id="budget"
                      className={`input cursor-pointer ${
                        errors.budget ? "!border-red" : ""
                      }`}
                      {...register("budget", {
                        required: t("budgetError"),
                      })}
                    >
                      <option value="">{t("budgetPlaceholder")}</option>
                      <option value="Under $100">
                        {t("budgetOptions.option1")}
                      </option>
                      <option value="$100-$300">
                        {t("budgetOptions.option2")}
                      </option>
                      <option value="$300-$700">
                        {t("budgetOptions.option3")}
                      </option>
                      <option value="$700+">
                        {t("budgetOptions.option4")}
                      </option>
                    </select>
                  </div>
                  {errors.budget && (
                    <p className="error">{errors.budget.message}</p>
                  )}
                </div>

                <div className="space-y-2 w-full">
                  <label htmlFor="comments" className="text-sm lg:text-base">
                    {t("commentLabel")}
                  </label>
                  <textarea
                    placeholder={t("commentPlaceholder")}
                    id="comments"
                    name="comments"
                    className="input h-28 lg:h-40"
                    {...register("comments")}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className={`button justify-center
                    ${loading ? "cursor-not-allowed opacity-70" : ""}`}
                >
                  {loading ? t("sendingBtn") : t("submitBtn")} <FaPaperPlane />
                </button>
              </form>
            </div>

            <div className="">
              <img
                src="images/contact.svg"
                alt="two man agreement"
                className="w-64 mx-auto sm:w-[24.125rem] md:w-[25rem] lg:w-[500px] xl:w-[550px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;

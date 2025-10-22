import React, { useState, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { FaPlus, FaTimes } from "react-icons/fa";

function FAQ({ getDirection }) {
  const { t } = useTranslation();

  const faqs = useMemo(
    () => [
      {
        id: "1",
        question: t("FAQ1Title"),
        answer: t("FAQ1Description"),
      },

      {
        id: "2",
        question: t("FAQ2Title"),
        answer: t("FAQ2Description"),
      },

      {
        id: "3",
        question: t("FAQ3Title"),
        answer: t("FAQ3Description"),
      },

      {
        id: "4",
        question: t("FAQ4Title"),
        answer: t("FAQ4Description"),
      },

      {
        id: "5",
        question: t("FAQ5Title"),
        answer: t("FAQ5Description"),
      },
    ],
    [t]
  );

  const [isOpen, setIsOpen] = useState(0);
  const toggleFaq = (index) => {
    setIsOpen(isOpen === index ? null : index);
  };

  return (
    <>
      <section
        dir={getDirection()}
        className="bg-stars-bg bg-no-repeat bg-cover px-4 sm:px-6 md:px-8 lg:px-16 py-10 md:py-14 lg:py-24 space-y-8 sm:space-y-10 md:space-y-12 lg:space-y-14"
      >
        <div className="flex items-center text-center justify-center gap-4">
          <img
            src="images/line.webp"
            alt="line"
            className="w-10 sm:w-40 md:w-56 lg:w-64"
          />
          <h2 className="font-heading text-h2 font-bold">{t("FAQ")}</h2>
          <img
            src="images/line.webp"
            alt="line"
            className="w-10 sm:w-40 md:w-56 lg:w-64"
          />
        </div>
        <div className="space-y-2 lg:space-y-4">
          {faqs.map((faq, index) => {
            const isOpened = isOpen === index;
            return (
              <div
                className="border border-colors-matisse rounded-lg max-w-4xl mx-auto p-3 md:p-5 bg-colors-lightedBalticSea/85 cursor-pointer transition-all duration-300"
                key={faq.id}
                onClick={() => toggleFaq(index)}
              >
                <div className="flex items-center gap-3 lg:ap-4">
                  <span
                    className={`md:text-lg xl:text-xl text-colors-danube transition-transform duration-200 ${
                      isOpened ? "rotate-45" : "rotate-0"
                    }`}
                  >
                    {isOpened ? <FaTimes /> : <FaPlus />}
                  </span>
                  <h3 className="text-colors-textSecondary font-medium text-sm sm:text-base md:text-lg xl:text-xl">
                    {faq.question}
                  </h3>
                </div>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpened ? "max-h-96 mt-3" : "max-h-0 mt-0"
                  }`}
                >
                  <p className="text-[0.8rem] sm:text-[0.95rem] md:text-base">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default FAQ;

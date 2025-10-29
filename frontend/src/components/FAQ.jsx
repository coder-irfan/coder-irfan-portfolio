import React, { useState, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
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
                  <motion.div
                    initial={false}
                    animate={{ rotate: isOpened ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="md:text-lg xl:text-xl text-colors-danube">
                      {isOpened ? <FaTimes /> : <FaPlus />}
                    </span>
                  </motion.div>
                  <h3 className="text-colors-textSecondary font-medium text-sm sm:text-base md:text-lg xl:text-xl">
                    {faq.question}
                  </h3>
                </div>

                <AnimatePresence initial={false}>
                  {isOpened && (
                    <motion.div
                      key="answer"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <p className="text-[0.8rem] sm:text-[0.95rem] md:text-base pt-3 lg:pt-5">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default FAQ;

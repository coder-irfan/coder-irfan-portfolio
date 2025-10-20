import React from "react";
import { useTranslation } from "react-i18next";
import { FaLaptopCode, FaRedoAlt, FaPalette, FaTools } from "react-icons/fa";

function Services({ getDirection }) {
  const { t } = useTranslation();

  const services = [
    {
      icon: <FaLaptopCode />,
      title: t("Website Development"),
      discription: t("Website Development Description"),
    },
    {
      icon: <FaTools />,
      title: t("Website Maintenance"),
      discription: t("Website Maintenance Description"),
    },
    {
      icon: <FaRedoAlt />,
      title: t("Website Redesign"),
      discription: t("Website Redesign Description"),
    },
    {
      icon: <FaPalette />,
      title: t("UI Enhancement"),
      discription: t("UI Enhancement Description"),
    },
  ];

  return (
    <>
      <section
        id="services"
        className="bg-stars-bg bg-no-repeat bg-cover px-4 sm:px-6 md:px-8 lg:px-16 py-10 md:py-14 lg:py-24 xl:pb-32 space-y-10 sm:space-y-12 md:space-y-16 lg:space-y-20 font-sans
        scroll-mt-6"
      >
        <div className="flex items-center text-center justify-center gap-4">
          <img
            src="images/line.webp"
            alt="line"
            className="w-10 sm:w-40 md:w-56 lg:w-64"
          />
          <h2 className="font-heading text-h2 font-bold">{t("Services")}</h2>
          <img
            src="images/line.webp"
            alt="line"
            className="w-10 sm:w-40 md:w-56 lg:w-64"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 sm:gap-4">
          {services.map((service, i) => (
            <div
              className={`bg-colors-lightedBalticSea/70 backdrop-blur-sm flex flex-col text-center items-center py-8 px-6 gap-6 lg:gap-10 max-w-[31.25rem] mx-auto rounded-lg
              hover:shadow-[0_0_1rem] shadow-[0_0_0.4rem] shadow-colors-matisse hover:shadow-colors-matisse transition-all duration-200 ${
                service.title === t("Website Maintenance")
                  ? "xl:translate-y-10"
                  : service.title === t("UI Enhancement")
                  ? "xl:translate-y-10"
                  : ""
              }`}
              key={i}
            >
              <span className="text-xl md:text-2xl lg:text-3xl border-2 rounded-xl shadow-[0_0_1rem] shadow-colors-matisse border-colors-matisse p-3 lg:p-4">
                {service.icon}
              </span>
              <div className="space-y-2 md:space-y-4">
                <h3 className="text-h3 font-heading font-semibold">
                  {service.title}
                </h3>
                <p className="text-justify lg:leading-[1.8] text-sm md:text-base">
                  {service.discription}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Services;

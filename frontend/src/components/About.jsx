import React from "react";
import { useTranslation } from "react-i18next";

function About({ getDirection }) {
  const { t } = useTranslation();

  return (
    <>
      <section
        id="about"
        dir={getDirection()}
        className="relative px-4 sm:px-6 md:px-8 lg:px-16 py-10 md:py-14 lg:py-24 max-w-[85rem] 2xl:max-w-[88rem] mx-auto"
      >
        <div className="absolute top-10 left-0 lg:left-[-5rem] bg-colors-darkMatisse w-32 h-32 lg:w-60 lg:h-60 blur-[100px] rounded-full -z-10"></div>
        <div className="absolute bottom-10 right-0 lg:right-[-5rem] bg-colors-darkMatisse w-32 h-32 lg:w-60 lg:h-60 blur-[100px] rounded-full -z-10"></div>

        <div className="space-y-8 sm:space-y-10 md:space-y-16">
          <div className="flex items-center text-center justify-center gap-4">
            <img
              src="images/line.webp"
              alt="line"
              className="w-10 sm:w-40 md:w-56 lg:w-64"
            />
            <h2 className="font-heading text-h2 font-bold">{t("About Me")}</h2>
            <img
              src="images/line.webp"
              alt="line"
              className="w-10 sm:w-40 md:w-56 lg:w-64"
            />
          </div>

          <div className="flex flex-col-reverse lg:flex-row-reverse items-center justify-between gap-8 sm:gap-12">
            <div className="max-w-[40rem] lg:max-w-[32rem] xl:max-w-[37.5rem] text-center lg:text-start text-aboutDescription leading-relaxed xl:leading-loose">
              <p className="">{t("About Description")}</p>
            </div>

            <div className="">
              <img
                src="images/coder-irfan-image.webp"
                alt="coder irfan image"
                className="w-60 sm:w-[20rem] lg:w-[25rem] xl:w-[28rem]"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;

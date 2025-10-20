import React from "react";
import { FaDownload, FaFolderOpen } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { useTranslation } from "react-i18next";

function Hero({ getDirection }) {
  const { t, i18n } = useTranslation();

  return (
    <>
      <section
        dir={getDirection()}
        id="home"
        className="relative pt-28 pb-20 md:pt-36 md:pb-28 lg:pt-44 lg:pb-36 px-4 sm:px-6 md:px-8 lg:px-16 max-w-[85rem] 2xl:max-w-[88rem] mx-auto"
      >
        <div className="absolute top-10 left-0 lg:left-[-5rem] bg-colors-darkMatisse w-28 h-28 lg:w-52 lg:h-52 blur-[100px] rounded-full -z-10"></div>
        <div className="absolute bottom-10 right-0 lg:right-[-5rem] bg-colors-darkMatisse w-28 h-28 lg:w-52 lg:h-52 blur-[100px] rounded-full -z-10"></div>
        <div className="flex flex-col-reverse xl:flex-row items-center justify-between gap-10 sm:gap-14">
          <div className="max-w-[40rem] xl:max-w-[37.5rem] text-center xl:text-start space-y-8 xl:space-y-14 relative">
            <div className="flex flex-col items-center xl:items-start gap-3 md:gap-4">
              <span className="tracking-[0.2rem] font-heading font-semibold text-welcomeMessage">
                {t("greeting")}
              </span>
              <h1 className="text-h1 font-black text-colors-danube leading-[1.20] tracking-wide">
                {t("name")}
              </h1>
              <div className="text-h2Typing text-colors-textSecondary font-semibold">
                <TypeAnimation
                  key={i18n.language}
                  sequence={[
                    t("role1"),
                    2000,
                    t("role2"),
                    2000,
                    t("role3"),
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </div>
            </div>
            <div className="flex flex-wrap items-center justify-center xl:justify-start gap-2 md:gap-4 text-sm sm:text-base md:text-lg font-medium">
              <a href="#projects" className="button">
                {t("viewProjects")} <FaFolderOpen />
              </a>

              <a href="pdf/Irfan-Noorzada_CV.pdf" download className="button">
                {t("downloadCV")} <FaDownload />
              </a>
            </div>

            <img
              src="images/ellipse.webp"
              alt="rounded stylish gradient img"
              className="absolute right-0 w-20 sm:w-auto bottom-0 sm:right-16 sm:bottom-0 xl:right-16 xl:bottom-0 opacity-40 -z-[5]"
            />

            <img
              src="images/ellipse.webp"
              alt="rounded stylish gradient img"
              className="absolute w-14 right-6 bottom-14 sm:right-10 sm:bottom-20 xl:right-32 xl:bottom-20 sm:w-20 opacity-40 -z-[5]"
            />
          </div>

          <div className="relative">
            <div className="">
              <img
                src="images/coder-irfan-profile.webp"
                alt="coder irfan profile picture"
                className="w-72 h-72 sm:w-[22rem] sm:h-[22rem] lg:w-96 lg:h-96 xl:w-[28rem] xl:h-[28rem] object-cover object-top rounded-full shadow-[0_0_2rem] shadow-colors-matisse"
              />
            </div>
            <img
              src="images/profile-bg-image.webp"
              alt=""
              className="absolute top-0 xl:-top-6 -rotate-45 -right-12 xl:-right-20 max-w-[400px] sm:max-w-[480px] lg:max-w-[500px] xl:max-w-[650px] -z-10"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;

import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaHandshake } from "react-icons/fa";
import ReactCountryFlag from "react-country-flag";
import { useTranslation } from "react-i18next";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isGlobeOpen, setIsGlobeOpen] = useState(false);
  const { i18n } = useTranslation();
  const { t } = useTranslation();

  const languages = [
    { code: "en", label: "English", countryCode: "US" },
    { code: "fa", label: "فارسی", countryCode: "IR" },
    { code: "ps", label: "پښتو", countryCode: "AF" },
    { code: "ar", label: "العربية", countryCode: "SA" },
    { code: "es", label: "Español", countryCode: "ES" },
  ];

  const currentLang =
    languages.find((lang) => lang.code === i18n.language) || languages[0];

  useEffect(() => {
    const savedLang = localStorage.getItem("language");
    if (savedLang && savedLang !== i18n.language) {
      i18n.changeLanguage(savedLang);
    }
  }, [i18n]);

  return (
    <>
      <header className="relative font-heading font-medium">
        <div
          className="2xl:max-w-[100rem] mx-auto px-4 sm:px-6 md:px-8 py-1 md:py-2 lg:px-16 fixed top-0 right-0 left-0 z-[60]
          transition-color duration-300 bg-colors-balticSea/90 shadow-md shadow-colors-balticSea"
        >
          <div
            className={`md:hidden fixed w-screen h-screen opacity-75 inset-0 bg-black transition-all duration-700 z-20
            ${
              isOpen
                ? "translate-x-0 delay-100 pointer-events-auto"
                : "translate-x-full delay-200 pointer-events-none"
            }`}
          ></div>

          <div className="flex items-center justify-between">
            <img
              src="images/coder-irfan-logo.webp"
              alt="coder irfan logo"
              className="w-14 h-14 lg:w-16 lg:h-16"
            />

            <div className="z-50">
              <nav
                className={`md:relative fixed top-0 right-0 h-full w-4/5 sm:w-2/3 md:right-0 transition-all duration-700 pt-24 pr-6 md:pr-0 md:pt-0
                md:h-auto md:w-auto md:translate-x-0 bg-menu-bg bg-cover bg-no-repeat bg-opacity-35 md:bg-none ${
                  isOpen ? "translate-x-0" : "translate-x-full"
                }`}
              >
                <div className="absolute inset-0 bg-black/30 z-0 md:hidden"></div>

                <div className="flex flex-col md:flex-row items-end gap-10">
                  <ul className="flex flex-col md:flex-row items-end md:items-center gap-4 lg:gap-6 text-base lg:text-lg text-colors-textPrimary">
                    <li className="hover-link">
                      <a href="#home" className="">
                        {t("home")}
                      </a>
                    </li>

                    <li className="hidden md:flex opacity-25">|</li>
                    <li className="hover-link">
                      <a href="#services" className="">
                        {t("services")}
                      </a>
                    </li>
                    <li className="hidden md:flex opacity-25">|</li>
                    <li className="hover-link">
                      <a href="#projects" className="">
                        {t("projects")}
                      </a>
                    </li>
                    <li className="hidden md:flex opacity-25">|</li>
                    <li className="hover-link">
                      <a href="#about" className="">
                        {t("about")}
                      </a>
                    </li>
                    <li className="hidden md:flex opacity-25">|</li>
                    <li className="hover-link">
                      <a href="#contact" className="">
                        {t("contact")}
                      </a>
                    </li>
                  </ul>
                  <div className="md:hidden z-10">
                    <a href="#contact" className="button">
                      {t("hireMe")}
                      <FaHandshake className="text-xl" />
                    </a>
                  </div>
                </div>

                {isOpen && (
                  <div
                    className="absolute top-4 right-5 sm:right-6 text-[1.4rem] md:hidden border border-colors-matisse rounded-md p-1"
                    onClick={() => setIsOpen(false)}
                  >
                    <FaTimes
                      className="cursor-pointer text-colors-matisse"
                      aria-label="Close menu"
                    />
                  </div>
                )}
              </nav>
            </div>

            <div className="flex items-center gap-4">
              <div className="relative">
                <button
                  className="flex items-center gap-2 mr-12 md:mr-0 cursor-pointer hover:text-colors-matisse transition-all duration-300 uppercase"
                  onClick={() => setIsGlobeOpen(!isGlobeOpen)}
                  aria-expanded={isGlobeOpen}
                  aria-label="Change language"
                >
                  <ReactCountryFlag
                    countryCode={currentLang.countryCode}
                    svg
                    className="text-2xl"
                  />
                  <span className="">{currentLang.code}</span>
                </button>

                {isGlobeOpen && (
                  <div
                    className="absolute right-0 mt-5 mr-4 md:mr-0 w-36 bg-colors-balticSea backdrop-blur-sm rounded-md shadow-[0_0_1.5rem] shadow-colors-matisse z-10 p-2
                    text-sm md:text-base"
                  >
                    <ul className="">
                      {languages.map((lang) => (
                        <li
                          className="px-3 py-2 hover:bg-colors-darkMatisse hover:rounded-md cursor-pointer flex items-center gap-3 transition-all duration-200"
                          key={lang.code}
                          onClick={() => {
                            i18n.changeLanguage(lang.code);
                            localStorage.setItem("language", lang.code);
                            setIsGlobeOpen(false);
                          }}
                        >
                          <ReactCountryFlag
                            countryCode={lang.countryCode}
                            svg
                            className="text-xl"
                          />
                          <span className="">{lang.label}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <div className="hidden md:flex">
                <a href="#contact" className="button">
                  {t("hireMe")}
                  <FaHandshake className="text-xl" />
                </a>
              </div>
            </div>

            {!isOpen && (
              <div
                className="absolute top-4 right-5 sm:right-6 text-[1.4rem] md:hidden border border-colors-matisse rounded-md p-1"
                onClick={() => setIsOpen(true)}
              >
                <FaBars
                  aria-label="Open menu"
                  className="cursor-pointer text-colors-matisse"
                />
              </div>
            )}
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;

import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { LuExternalLink } from "react-icons/lu";
import { motion, AnimatePresence } from "framer-motion";

function Projects({ getDirection }) {
  const { t } = useTranslation();
  const [visibleCount, setVisibleCount] = useState(6);

  const MyProjects = [
    {
      image: "images/Sushi-Restaurant.webp",
      title: t("SushiRestaurantTitle"),
      description: t("SushiRestaurantDescription"),
      link: "https://sushi-restaurant-hylm.onrender.com/",
    },
    {
      image: "images/online-medical-store.webp",
      title: t("OnlineMedicalStoreTitle"),
      description: t("OnlineMedicalStoreDescription"),
      link: "https://online-medical-store-frontend.onrender.com/",
    },
    {
      image: "images/allowishus-delicious.webp",
      title: t("AllowishusDeliciousTitle"),
      description: t("AllowishusDeliciousDescription"),
      link: "https://coder-irfan.github.io/allowishus-delicious/",
    },
    {
      image: "images/fright-land.webp",
      title: t("FrightLandTitle"),
      description: t("FrightLandDescription"),
      link: "https://coder-irfan.github.io/fright-land/",
    },
    {
      image: "images/Eurostars-Gran-Hotel.webp",
      title: t("EurostarsGranHotelTitle"),
      description: t("EurostarsGranHotelDescription"),
      link: "https://coder-irfan.github.io/eurostars-gran-hotel-santiago/",
    },
    {
      image: "images/bloom-haven.webp",
      title: t("BloomHavenTitle"),
      description: t("BloomHavenDescription"),
      link: "https://coder-irfan.github.io/bloom-haven/",
    },
    {
      image: "images/bright-academy.webp",
      title: t("BrightAcademyTitle"),
      description: t("BrightAcademyDescription"),
      link: "https://coder-irfan.github.io/bright-academy/",
    },
    {
      image: "images/keithston-bakery.webp",
      title: t("KeithstonBakeryTitle"),
      description: t("KeithstonBakeryDescription"),
      link: "https://coder-irfan.github.io/keithston-Bakery/",
    },
    {
      image: "images/Space-tourism-website.webp",
      title: t("SpaceTourismTitle"),
      description: t("SpaceTourismDescription"),
      link: "https://coder-irfan.github.io/space-tourism-website/",
    },
  ];

  return (
    <>
      <section
        id="projects"
        dir={getDirection()}
        className="bg-stars-bg bg-no-repeat bg-cover px-8 md:px-14 lg:px-24 xl:px-32 py-12 md:py-14 lg:py-24 xl:pb-32 space-y-10 sm:space-y-12 md:space-y-16 lg:space-y-20 font-sans
        scroll-mt-6"
      >
        <div className="space-y-2 lg:space-y-4">
          <div className="flex items-center text-center justify-center gap-4">
            <img
              src="images/line.webp"
              alt="line"
              className="w-10 sm:w-40 md:w-56 lg:w-64"
            />
            <h2 className="font-heading text-h2 font-bold">{t("Projects")}</h2>
            <img
              src="images/line.webp"
              alt="line"
              className="w-10 sm:w-40 md:w-56 lg:w-64"
            />
          </div>

          <p className="max-w-[33rem] lg:max-w-[40rem] xl:max-w-[45rem] mx-auto text-center text-sm md:text-base lg:text-lg xl:text-xl text-colors-textSecondary">
            {t("Projects Description")}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 text-center">
          <AnimatePresence>
            {MyProjects.slice(0, visibleCount).map((project, i) => (
              <motion.div
                className="bg-colors-lightedBalticSea/60 backdrop-blur-sm max-w-[30rem] rounded-lg mx-auto flex flex-col"
                key={i}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.4 }}
              >
                <div className="">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 sm:h-auto object-cover object-top rounded-t-lg brightness-90"
                  />
                </div>
                <div className="py-6 lg:py-8 px-6 flex flex-col items-center justify-start gap-6 flex-1">
                  <div className="space-y-2">
                    <h4 className="font-bold font-heading text-h4">
                      {project.title}
                    </h4>
                    <p className="text-sm md:text-base text-colors-textSecondary leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    className="button mt-auto"
                  >
                    {t("Button")} <LuExternalLink />
                  </a>
                </div>
              </motion.div>
            ))}
            {MyProjects.length > 6 && (
              <div className="col-span-full justify-center mt-6 lg:mt-10">
                <button
                  className="text-xl text-colors-textPrimary underline hover:no-underline"
                  onClick={() =>
                    setVisibleCount(visibleCount === 6 ? MyProjects.length : 6)
                  }
                >
                  {visibleCount === 6 ? t("seeMore") : t("seeLess")}
                </button>
              </div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </>
  );
}

export default Projects;

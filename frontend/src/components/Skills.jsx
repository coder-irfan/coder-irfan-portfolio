import React from "react";
import { useTranslation } from "react-i18next";

const skills = [
  {
    name: "HTML",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
  },
  {
    name: "CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
  },
  {
    name: "SAAS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg",
  },
  {
    name: "Tailwind",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  },
  {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  },
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  },
  {
    name: "Node",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "MySQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
  },
  {
    name: "Express",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
  },
];

function Skills({ getDirection }) {
  const { t } = useTranslation();

  return (
    <>
      <section
        dir={getDirection()}
        className="relative px-4 sm:px-6 md:px-8 lg:px-16 py-10 md:py-14 lg:py-24"
      >
        <div className="absolute top-10 left-0 lg:left-[-5rem] bg-colors-darkMatisse w-28 h-28 lg:w-52 lg:h-52 blur-[100px] rounded-full -z-10"></div>
        <div className="absolute bottom-10 right-0 lg:right-[-5rem] bg-colors-darkMatisse w-28 h-28 lg:w-52 lg:h-52 blur-[100px] rounded-full -z-10"></div>
        <div className="space-y-6 sm:space-y-8 lg:space-y-10">
          <div className="space-y-2 lg:space-y-4">
            <div className="flex items-center text-center justify-center gap-4">
              <img
                src="images/line.webp"
                alt="line"
                className="w-10 sm:w-40 md:w-56 lg:w-64"
              />
              <h2 className="font-heading text-h2 font-bold">
                {t("My Skills")}
              </h2>
              <img
                src="images/line.webp"
                alt="line"
                className="w-10 sm:w-40 md:w-56 lg:w-64"
              />
            </div>

            <p className="max-w-[33rem] lg:max-w-[40rem] xl:max-w-[45rem] mx-auto text-center text-sm md:text-base lg:text-lg xl:text-xl text-colors-textSecondary">
              {t("My Skills Description")}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 xl:gap-4 max-w-[33rem] lg:max-w-[40rem] xl:max-w-[45rem] mx-auto">
            {skills.map((skill, i) => (
              <div
                className="relative flex flex-col justify-center items-center gap-2 rounded-xl p-3 lg:p-4 shadow-[0_0_0.8rem_inset] shadow-colors-matisse cursor-pointer 
                w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 xl:w-[5.5rem] xl:h-[5.5rem] hover:scale-110 transition-transform duration-200"
                key={i}
              >
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className={` ${
                    skill.name.toLowerCase() === "express" ? "invert" : ""
                  }`}
                />

                <span
                  className="absolute inset-0 flex justify-center items-center text-colors-textPrimary font-semibold text-[0.5rem] md:text-[0.6rem] lg:text-xs opacity-0 hover:opacity-100
                  bg-colors-balticSea/80 rounded-xl transition-opacity duration-200"
                >
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Skills;

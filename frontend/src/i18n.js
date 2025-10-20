import i18n from "i18next"; // internationalization18next (handling multiple languages, translations, etc.).
import { initReactI18next } from "react-i18next"; // allows i18next to integrate with React hooks and components (like useTranslation). Without this, you couldn’t easily use t("key") inside React components.
import en from "./locales/en.json";
import fa from "./locales/fa.json";
import ps from "./locales/ps.json";
import ar from "./locales/ar.json";
import es from "./locales/es.json";

const savedLang = localStorage.getItem("language") || "en";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    fa: { translation: fa },
    ps: { translation: ps },
    ar: { translation: ar },
    es: { translation: es },
  },
  lng: savedLang, // default language
  fallbackLng: "en", // if fa.json doesn’t have "projects" defined, it will show "Projects" from en.json.
  interpolation: { escapeValue: false },
});

export default i18n;

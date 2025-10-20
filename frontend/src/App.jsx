import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import About from "./components/About";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import { useTranslation } from "react-i18next";
import { Slide, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const { i18n } = useTranslation();
  const getDirection = () => {
    const rtlLanguages = ["fa", "ps", "ar"];
    return rtlLanguages.includes(i18n.language) ? "rtl" : "ltr";
  };

  return (
    <>
      <Header getDirection={getDirection} />
      <Hero getDirection={getDirection} />
      <Services getDirection={getDirection} />
      <Skills getDirection={getDirection} />
      <Projects getDirection={getDirection} />
      <About getDirection={getDirection} />
      <FAQ getDirection={getDirection} />
      <Contact getDirection={getDirection} />
      <Footer getDirection={getDirection} />
      <ScrollToTop />

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        transition={Slide}
        toastStyle={{
          margin: "0.2rem",
          maxWidth: "90vw",
          fontSize: "0.9rem",
        }}
        containerStyle={{
          padding: "0.5rem",
        }}
      />
    </>
  );
}

export default App;

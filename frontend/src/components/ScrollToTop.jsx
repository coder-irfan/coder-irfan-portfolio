import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  // Show button after scrolling down 500px
  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <button
        className={`fixed bottom-6 right-6 lg:right-8 lg:bottom-8 z-50 p-3 sm:p-4 rounded-full shadow-lg transition-all duration-300 bg-colors-matisse hover:bg-colors-steelBlue ${
          visible ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={scrollTop}
        title="Scroll to Top"
      >
        <FaArrowUp className="lg:text-lg" />
      </button>
    </>
  );
}

export default ScrollToTop;

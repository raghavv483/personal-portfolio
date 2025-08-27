"use client";

import { FaArrowUp } from "react-icons/fa6";

const DEFAULT_BTN_CLS =
  "fixed bottom-8 right-6 z-50 flex items-center rounded-full bg-gradient-to-r from-pink-500 to-violet-600 p-4 hover:text-xl transition-all duration-300 ease-out";

const ScrollToTop = () => {
  const handleClick = () => {
    // Simple scroll to top without smooth behavior
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }
  };

  return (
    <button className={DEFAULT_BTN_CLS} onClick={handleClick}>
      <FaArrowUp />
    </button>
  );
};

export default ScrollToTop;

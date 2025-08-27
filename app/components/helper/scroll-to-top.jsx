"use client";

import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa6";

const DEFAULT_BTN_CLS =
  "fixed bottom-8 right-6 z-50 flex items-center rounded-full bg-gradient-to-r from-pink-500 to-violet-600 p-4 hover:text-xl transition-all duration-300 ease-out";
const SCROLL_THRESHOLD = 50;

const ScrollToTop = () => {
  const [btnCls, setBtnCls] = useState(DEFAULT_BTN_CLS);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    // Only run on client side
    if (!isClient) return;

    // Check if we're on the client side
    if (typeof window === 'undefined') return;

    // Wait for the next tick to ensure everything is ready
    const timer = setTimeout(() => {
      const handleScroll = () => {
        if (typeof window !== 'undefined' && window.scrollY !== undefined) {
          if (window.scrollY > SCROLL_THRESHOLD) {
            setBtnCls(DEFAULT_BTN_CLS.replace(" hidden", ""));
          } else {
            setBtnCls(DEFAULT_BTN_CLS + " hidden");
          }
        }
      };

      if (typeof window !== 'undefined' && window.addEventListener) {
        window.addEventListener("scroll", handleScroll, { passive: true });
      }

      return () => {
        if (typeof window !== 'undefined' && window.removeEventListener) {
          window.removeEventListener("scroll", handleScroll, { passive: true });
        }
      };
    }, 100);

    return () => clearTimeout(timer);
  }, [isClient]);

  const onClickBtn = () => {
    if (typeof window !== 'undefined' && window.scrollTo) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <button className={btnCls} onClick={onClickBtn}>
      <FaArrowUp />
    </button>
  );
};

export default ScrollToTop;

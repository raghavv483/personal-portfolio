"use client";

import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa6";

const DEFAULT_BTN_CLS =
  "fixed bottom-8 right-6 z-50 flex items-center rounded-full bg-gradient-to-r from-pink-500 to-violet-600 p-4 hover:text-xl transition-all duration-300 ease-out";
const SCROLL_THRESHOLD = 50;

const ScrollToTop = () => {
  const [btnCls, setBtnCls] = useState(DEFAULT_BTN_CLS);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    // Wait for complete hydration
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    // Only run after complete hydration
    if (!isHydrated) return;

    // Additional safety check
    if (typeof window === 'undefined') return;

    // Wait for DOM to be fully ready
    const timer = setTimeout(() => {
      try {
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
          try {
            if (typeof window !== 'undefined' && window.removeEventListener) {
              window.removeEventListener("scroll", handleScroll, { passive: true });
            }
          } catch (error) {
            // Silently handle cleanup errors
          }
        };
      } catch (error) {
        // Silently handle any errors
      }
    }, 200);

    return () => clearTimeout(timer);
  }, [isHydrated]);

  const onClickBtn = () => {
    try {
      if (typeof window !== 'undefined' && window.scrollTo) {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } catch (error) {
      // Silently handle any errors
    }
  };

  return (
    <button className={btnCls} onClick={onClickBtn}>
      <FaArrowUp />
    </button>
  );
};

export default ScrollToTop;

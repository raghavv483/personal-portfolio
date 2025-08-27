"use client";

import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa6";

const DEFAULT_BTN_CLS =
  "fixed bottom-8 right-6 z-50 flex items-center rounded-full bg-gradient-to-r from-pink-500 to-violet-600 p-4 hover:text-xl transition-all duration-300 ease-out";
const SCROLL_THRESHOLD = 50;

const ScrollToTop = () => {
  const [btnCls, setBtnCls] = useState(DEFAULT_BTN_CLS);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Only set mounted after component is fully mounted on client
    setIsMounted(true);
  }, []);

  // During SSR and initial render, just return the basic structure without any effects
  if (!isMounted) {
    return (
      <button className={DEFAULT_BTN_CLS}>
        <FaArrowUp />
      </button>
    );
  }

  // Only after full client-side mounting, add the interactive effects
  useEffect(() => {
    // Double-check we're on client
    if (typeof window === 'undefined') return;

    // Wait for next tick to ensure DOM is ready
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
    }, 100);

    return () => clearTimeout(timer);
  }, [isMounted]);

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

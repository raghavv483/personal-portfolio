"use client"

import { useEffect, useState } from 'react';

const GlowCard = ({ children, identifier }) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    // Wait for complete hydration
    setIsHydrated(true);

    // Additional delay to ensure everything is ready
    const renderTimer = setTimeout(() => {
      setShouldRender(true);
    }, 300);

    return () => clearTimeout(renderTimer);
  }, []);

  useEffect(() => {
    // Only run after complete hydration and render flag
    if (!isHydrated || !shouldRender) return;

    // Additional safety check
    if (typeof window === 'undefined' || typeof document === 'undefined') return;

    // Wait for DOM to be fully ready
    const timer = setTimeout(() => {
      try {
        const CONTAINER = document.querySelector(`.glow-container-${identifier}`);
        const CARDS = document.querySelectorAll(`.glow-card-${identifier}`);

        // Check if elements exist before proceeding
        if (!CONTAINER || !CARDS.length) return;

        const CONFIG = {
          proximity: 40,
          spread: 80,
          blur: 12,
          gap: 32,
          vertical: false,
          opacity: 0,
        };

        const UPDATE = (event) => {
          if (!event) return;

          for (const CARD of CARDS) {
            if (!CARD || !CARD.getBoundingClientRect) continue;

            try {
              const CARD_BOUNDS = CARD.getBoundingClientRect();

              if (
                event.x > CARD_BOUNDS.left - CONFIG.proximity &&
                event.x < CARD_BOUNDS.left + CARD_BOUNDS.width + CONFIG.proximity &&
                event.y > CARD_BOUNDS.top - CONFIG.proximity &&
                event.y < CARD_BOUNDS.top + CARD_BOUNDS.height + CONFIG.proximity
              ) {
                CARD.style.setProperty('--active', 1);
              } else {
                CARD.style.setProperty('--active', CONFIG.opacity);
              }

              const CARD_CENTER = [
                CARD_BOUNDS.left + CARD_BOUNDS.width * 0.5,
                CARD_BOUNDS.top + CARD_BOUNDS.height * 0.5,
              ];

              let ANGLE =
                (Math.atan2(event.y - CARD_CENTER[1], event.x - CARD_CENTER[0]) *
                  180) /
                Math.PI;

              ANGLE = ANGLE < 0 ? ANGLE + 360 : ANGLE;

              CARD.style.setProperty('--start', ANGLE + 90);
            } catch (error) {
              // Silently continue if there's an error
              continue;
            }
          }
        };

        if (document.body) {
          document.body.addEventListener('pointermove', UPDATE);
        }

        const RESTYLE = () => {
          if (CONTAINER && CONTAINER.style) {
            CONTAINER.style.setProperty('--gap', CONFIG.gap);
            CONTAINER.style.setProperty('--blur', CONFIG.blur);
            CONTAINER.style.setProperty('--spread', CONFIG.spread);
            CONTAINER.style.setProperty(
              '--direction',
              CONFIG.vertical ? 'column' : 'row'
            );
          }
        };

        RESTYLE();
        UPDATE();

        // Cleanup event listener
        return () => {
          try {
            if (typeof window !== 'undefined' && document.body) {
              document.body.removeEventListener('pointermove', UPDATE);
            }
          } catch (error) {
            // Silently handle cleanup errors
          }
        };
      } catch (error) {
        // Silently handle any errors
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [identifier, isHydrated, shouldRender]);

  // Don't render anything until fully hydrated
  if (!isHydrated) {
    return (
      <div className={`glow-container-${identifier} glow-container`}>
        <article className={`glow-card glow-card-${identifier} h-fit cursor-pointer border border-[#2a2e5a] transition-all duration-300 relative bg-[#101123] text-gray-200 rounded-xl hover:border-transparent w-full`}>
          <div className="glows"></div>
          {children}
        </article>
      </div>
    );
  }

  return (
    <div className={`glow-container-${identifier} glow-container`}>
      <article className={`glow-card glow-card-${identifier} h-fit cursor-pointer border border-[#2a2e5a] transition-all duration-300 relative bg-[#101123] text-gray-200 rounded-xl hover:border-transparent w-full`}>
        <div className="glows"></div>
        {children}
      </article>
    </div>
  );
};

export default GlowCard;

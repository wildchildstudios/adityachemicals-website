"use client";

import { useEffect } from "react";

export default function ScrollBackground() {
  useEffect(() => {
    const sections = document.querySelectorAll("[data-bg-color]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const targetColor = entry.target.getAttribute("data-bg-color");
            if (targetColor) {
              // Smoothly update root CSS custom property for dynamic background
              document.documentElement.style.setProperty("--dynamic-bg", targetColor);
            }
          }
        });
      },
      {
        threshold: 0.25, // Trigger when 25% of the target section is in view
        rootMargin: "-25% 0px -25% 0px", // Focus triggers in the middle of the viewport
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
      // Reset properties on component unmount
      document.documentElement.style.removeProperty("--dynamic-bg");
    };
  }, []);

  return null;
}

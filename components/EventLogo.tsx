import React from "react";

interface EventLogoProps {
  type: string;
  className?: string;
}

export default function EventLogo({ type, className = "" }: EventLogoProps) {
  switch (type) {
    case "cphi":
      return (
        <svg viewBox="0 0 160 50" className={`h-7 w-auto ${className}`} fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M25 15C16.7157 15 10 21.7157 10 30C10 38.2843 16.7157 45 25 45C33.2843 45 40 38.2843 40 30" stroke="#009A44" strokeWidth="6" strokeLinecap="round" />
          <circle cx="28" cy="22" r="6" fill="#003594" />
          <text x="50" y="36" fill="#009A44" fontFamily="system-ui, sans-serif" fontWeight="900" fontSize="24">CPHI</text>
        </svg>
      );
    case "vitafoods":
      return (
        <svg viewBox="0 0 160 50" className={`h-7 w-auto ${className}`} fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="25" cy="25" r="16" fill="#0072CE" opacity="0.15" />
          <path d="M25 10C25 10 33 18 33 25C33 32 25 40 25 40C25 40 17 32 17 25C17 18 25 10 25 10Z" fill="#0072CE" />
          <text x="50" y="34" fill="#0072CE" fontFamily="system-ui, sans-serif" fontWeight="800" fontSize="18">Vitafoods</text>
        </svg>
      );
    case "ift":
      return (
        <svg viewBox="0 0 160 50" className={`h-7 w-auto ${className}`} fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="10" width="30" height="30" rx="6" fill="#E87722" />
          <text x="17" y="31" fill="#FFFFFF" fontFamily="system-ui, sans-serif" fontWeight="900" fontSize="16">IFT</text>
          <text x="48" y="34" fill="#E87722" fontFamily="system-ui, sans-serif" fontWeight="900" fontSize="18">FIRST</text>
        </svg>
      );
    case "fi":
      return (
        <svg viewBox="0 0 160 50" className={`h-7 w-auto ${className}`} fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="25" cy="25" r="16" fill="#00A3A6" />
          <text x="18" y="32" fill="#FFFFFF" fontFamily="system-ui, sans-serif" fontWeight="800" fontSize="20">fi</text>
          <text x="48" y="34" fill="#00A3A6" fontFamily="system-ui, sans-serif" fontWeight="800" fontSize="18">India</text>
        </svg>
      );
    case "chemexpo":
      return (
        <svg viewBox="0 0 160 50" className={`h-7 w-auto ${className}`} fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 38L23 22V12H27V22L35 38C37 41 34 43 30 43H20C16 43 13 41 15 38Z" fill="#1E3A8A" />
          <circle cx="25" cy="33" r="3" fill="#3B82F6" />
          <circle cx="21" cy="27" r="2" fill="#3B82F6" />
          <text x="45" y="34" fill="#1E3A8A" fontFamily="system-ui, sans-serif" fontWeight="800" fontSize="16">ChemExpo</text>
        </svg>
      );
    case "supplyside":
      return (
        <svg viewBox="0 0 180 50" className={`h-7 w-auto ${className}`} fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="5" y="10" width="35" height="30" rx="4" fill="#8B5CF6" />
          <path d="M17 18H28M17 25H28M17 32H25" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
          <text x="48" y="34" fill="#8B5CF6" fontFamily="system-ui, sans-serif" fontWeight="800" fontSize="16">SupplySide</text>
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 160 50" className={`h-7 w-auto ${className}`} fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="25" cy="25" r="15" fill="#6B7280" />
          <text x="48" y="34" fill="#6B7280" fontFamily="system-ui, sans-serif" fontWeight="800" fontSize="18">Event</text>
        </svg>
      );
  }
}

"use client";

import { useState, useEffect } from "react";

interface CountdownProps {
  startDate: string;
}

export default function EventCountdown({ startDate }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  } | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Parse ISO date string
    const target = new Date(startDate).getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = target - now;

      if (difference <= 0) {
        setTimeLeft(null);
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, [startDate]);

  if (!mounted) {
    return (
      <div className="flex gap-2">
        <div className="h-9 w-10 bg-surface-container-high rounded animate-pulse"></div>
        <div className="h-9 w-10 bg-surface-container-high rounded animate-pulse"></div>
        <div className="h-9 w-10 bg-surface-container-high rounded animate-pulse"></div>
        <div className="h-9 w-10 bg-surface-container-high rounded animate-pulse"></div>
      </div>
    );
  }

  if (!timeLeft) {
    return (
      <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded-full text-xs font-bold select-none animate-pulse">
        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping"></span>
        Event is Live
      </span>
    );
  }

  return (
    <div className="flex gap-2 text-center text-xs font-bold text-deep-navy">
      <div className="flex flex-col bg-surface-container-low border border-surface-container-highest px-2 py-1 rounded min-w-[36px]">
        <span className="text-primary font-bold text-sm leading-none">{timeLeft.days}</span>
        <span className="text-[8px] text-on-surface-variant/80 uppercase font-bold mt-0.5">Days</span>
      </div>
      <div className="flex flex-col bg-surface-container-low border border-surface-container-highest px-2 py-1 rounded min-w-[36px]">
        <span className="text-primary font-bold text-sm leading-none">{timeLeft.hours}</span>
        <span className="text-[8px] text-on-surface-variant/80 uppercase font-bold mt-0.5">Hrs</span>
      </div>
      <div className="flex flex-col bg-surface-container-low border border-surface-container-highest px-2 py-1 rounded min-w-[36px]">
        <span className="text-primary font-bold text-sm leading-none">{timeLeft.minutes}</span>
        <span className="text-[8px] text-on-surface-variant/80 uppercase font-bold mt-0.5">Min</span>
      </div>
      <div className="flex flex-col bg-surface-container-low border border-surface-container-highest px-2 py-1 rounded min-w-[36px]">
        <span className="text-primary font-bold text-sm leading-none">{timeLeft.seconds}</span>
        <span className="text-[8px] text-on-surface-variant/80 uppercase font-bold mt-0.5">Sec</span>
      </div>
    </div>
  );
}

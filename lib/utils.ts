import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { techMap } from "@/constants/techMap";

/**
 * ادغام کلاس‌ها با Tailwind
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * دریافت کلاس Devicon بر اساس نام تکنولوژی
 */
export const getDeviconClassName = (techName: string) => {
  const normalizedTechName = techName.replace(/[ .]/g, "").toLowerCase();
  return techMap[normalizedTechName]
    ? `${techMap[normalizedTechName]} colored`
    : "devicon-devicon-plain";
};


export const getTimeStamp = (date: Date | string): string => {
  if (!date) return "just now"; 

  const d = typeof date === "string" ? new Date(date) : date;

  const now = new Date();
  const secondsAgo = Math.floor((now.getTime() - d.getTime()) / 1000);

  if (secondsAgo < 1) return "just now";

  const units = [
    { label: "year", seconds: 31536000 },
    { label: "month", seconds: 2592000 },
    { label: "week", seconds: 604800 },
    { label: "day", seconds: 86400 },
    { label: "hour", seconds: 3600 },
    { label: "minute", seconds: 60 },
    { label: "second", seconds: 1 },
  ];

  for (const unit of units) {
    const interval = Math.floor(secondsAgo / unit.seconds);
    if (interval >= 1) {
      return `${interval} ${unit.label}${interval > 1 ? "s" : ""} ago`;
    }
  }

  return "just now";
};

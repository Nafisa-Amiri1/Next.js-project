
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { techMap } from "@/constants/techMap"

/**
 * ترکیب کلاس‌ها با clsx و tailwind-merge
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * دریافت کلاس Devicon بر اساس نام تکنولوژی
 * @param techName نام تکنولوژی (مانند "JavaScript", "reactjs")
 * @returns رشته کلاس Devicon همراه با "colored" یا کلاس پیش‌فرض
 */
export const getDeviconClassName = (techName: string) => {
  // نرمال‌سازی نام تکنولوژی: حذف فاصله و نقطه، تبدیل به حروف کوچک
  const normalizedTechName = techName.replace(/[ .]/g, "").toLowerCase()

  // اگر تکنولوژی پیدا شد، کلاس + "colored" اضافه شود
  // در غیر این صورت، کلاس پیش‌فرض Devicon برگردانده شود
  return techMap[normalizedTechName]
    ? `${techMap[normalizedTechName]} colored`
    : "devicon-devicon-plain"
}

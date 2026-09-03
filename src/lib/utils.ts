import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatAge(hoursAgo: number): string {
  if (hoursAgo < 1) return "now";
  if (hoursAgo < 24) return `${Math.round(hoursAgo)}h`;
  const days = Math.round(hoursAgo / 24);
  if (days < 14) return `${days}d`;
  return `${Math.round(days / 7)}w`;
}

export function scoreColor(score: number): string {
  if (score >= 90) return "text-up";
  if (score >= 70) return "text-brand";
  return "text-down";
}

export function isLegacyIOSUserAgent(ua: string): boolean {
  if (!/iPhone|iPad|iPod/i.test(ua)) return false;
  const match = ua.match(/OS (\d+)[_.]/i);
  if (!match) return false;
  const version = Number(match[1]);
  return version >= 4 && version <= 13;
}

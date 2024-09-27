import { extendTailwindMerge } from "tailwind-merge";
import { type ClassValue, clsx } from "clsx";

const twMerge = extendTailwindMerge({});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
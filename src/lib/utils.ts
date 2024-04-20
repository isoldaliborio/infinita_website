import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function removeTrailingSlash(str: string) {
  // This regex matches a trailing slash and replaces it with an empty string
  return str.replace(/\/$/, '');
}

export function addLangParam(language: string) {
  if (language === 'pt') {
    const urlParams = new URLSearchParams(window.location.search);
    if (!urlParams.has('lang')) {
      const newUrl = new URL(window.location.href);
      newUrl.searchParams.set('lang', 'pt');
      window.history.pushState({}, '', newUrl.toString());
    }
  }
}
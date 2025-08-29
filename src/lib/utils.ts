import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function last<T>(array: Array<T>): T|null {
  return array[array.length - 1] ?? null
}
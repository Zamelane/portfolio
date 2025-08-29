import type { Metadata } from "next";
import "./globals.css";
import 'remixicon/fonts/remixicon.css';
import { ChildrenProps } from "@/src/types";
import localFont from 'next/font/local';
import { NoSSRProviders } from "@/src/components/noSSRProviders";
import { Toaster } from "sonner";
import { cn } from '../src/lib/utils';
import { config } from "@/config";

const mainFont = localFont({
  src: [
    { path: '../public/fonts/FiraCode.ttf' }
  ],
  variable: '--font-main',
  preload: true,
  fallback: [
    "ui-monospace",
    "SFMono-Regular",
    "Menlo",
    "Monaco",
    "Consolas",
    "Liberation Mono",
    "Courier New",
    "monospace"
  ],
  display: 'block'
})

export const metadata: Metadata = {
  title: `${config.name} ${config.surname} | Portfolio`,
  description: `The portfolio website owned by ${config.name} ${config.surname}`,
};

export default function RootLayout({
  children,
}: ChildrenProps) {
  return (
    <html lang="en" suppressHydrationWarning className={cn('bg-theme-backdrop', mainFont.variable)}>
      <body>
        <NoSSRProviders>
          {children}
        </NoSSRProviders>
        <Toaster richColors theme="dark" position="bottom-center"/>
      </body>
    </html>
  );
}

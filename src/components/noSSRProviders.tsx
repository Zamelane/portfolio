'use client'

import dynamic from "next/dynamic";

export const NoSSRProviders = dynamic(
  () => import('./providers').then(_ => _.Providers),
  { ssr: false }
)
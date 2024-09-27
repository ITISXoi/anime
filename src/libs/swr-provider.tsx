'use client';
import React from 'react';
import { SWRConfig } from 'swr'

export const SWRProvider = ({ children }: Readonly<{
  children: React.ReactNode;
}>) => {
  // console.log('.0.........', Environment)
  return <SWRConfig>{children}</SWRConfig>
};
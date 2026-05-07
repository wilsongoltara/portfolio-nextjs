'use client';

import AppContextProvider from '@infra/context/AppContext';
import { ReactNode } from 'react';

export default function Providers({
  children,
}: Readonly<{ children: ReactNode }>) {
  return <AppContextProvider>{children}</AppContextProvider>;
}


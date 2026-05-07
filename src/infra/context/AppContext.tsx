'use client';

import { ChildrenProps } from '@interfaces/interfaceProps';
import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useMemo,
  useState,
} from 'react';

interface AppContextValue {
  nav: boolean;
  setNav: Dispatch<SetStateAction<boolean>>;
}

const AppContext = createContext<AppContextValue | undefined>(undefined);

export function useAppContext(): AppContextValue {
  const value = useContext(AppContext);
  if (!value) {
    throw new Error('useAppContext must be used within AppContextProvider');
  }
  return value;
}

export default function AppContextProvider({
  children,
}: Readonly<ChildrenProps>) {
  const [nav, setNav] = useState(false);

  const value = useMemo(() => ({ nav, setNav }), [nav]);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
import { ChildrenProps } from '@interfaces/interfaceProps';
import {createContext, Dispatch, SetStateAction, useMemo, useState} from 'react';

interface AppContextInterface {
  nav: boolean,
  setNav: Dispatch<SetStateAction<boolean>>;
}

export const AppContext = createContext<AppContextInterface>(null);

export default function AppContextProvider({children}: ChildrenProps) {
  const [nav, setNav] = useState(false);

  const context = useMemo(() => ({nav, setNav}), [nav]);

  return (
    <>
      <AppContext.Provider value={context}>
        {children}
      </AppContext.Provider>
    </>
  );
}
import { ChildrinProps } from '@interfaces/interfaces';
import { createContext, useState } from 'react';
import Content from './global/Content';
import Footer from './global/Footer';
import NavBar from './global/NavBar';

export const AppContext = createContext(null);

export default function Layout({ children }: ChildrinProps) {
  const [nav, setNav] = useState(false);

  return (
    <AppContext.Provider value={{ nav, setNav }}>
      <main className='flex flex-col justify-between items-center min-h-screen'>
        <NavBar />
        <Content>{children}</Content>
        <Footer />
      </main>
    </AppContext.Provider>
  );
};

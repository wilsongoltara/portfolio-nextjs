import { ChildrinProps } from '@interfaces/interfaces';
import { createContext, useState } from 'react';
import Content from './global/Content';
import Footer from './global/Footer';
import NavBar from './global/NavBar';

export const AppContext = createContext(null);

const Layout = ({ children }: ChildrinProps) => {
  const [nav, setNav] = useState(false);

  return (
    <AppContext.Provider value={{ nav, setNav }}>
      <NavBar />
      <Content>{children}</Content>
      <Footer />
    </AppContext.Provider>
  );
};

export default Layout;


import {ChildrenProps} from '@interfaces/interfaceProps';
import {createContext, useState} from 'react';
import Footer from '@patterns/Footer';
import NavBar from '@patterns/NavBar';
import Head from '@infra/components/Head';
import Content from '@patterns/Content';

export const AppContext = createContext(null);

export default function Layout({children}: ChildrenProps) {
  const [nav, setNav] = useState(false);

  return (
    <div className="layout">
      <Head>Wilson Goltara</Head>
      <AppContext.Provider value={{nav, setNav}}>
        <NavBar/>
        <Content>{children}</Content>
      </AppContext.Provider>
      <Footer/>
    </div>
  );
};

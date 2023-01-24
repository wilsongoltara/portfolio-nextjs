import {InterfaceProps} from '@interfaces/interfaceProps';
import {createContext, lazy, Suspense, useState} from 'react';
import Footer from './global/Footer';
import NavBar from './global/NavBar';
import Head from '@components/Head';

const Content = lazy(() => import('./global/Content'));

export const AppContext = createContext(null);

export default function Layout({children}: InterfaceProps) {
  const [nav, setNav] = useState(false);

  return (
    <main className="flex flex-col justify-between items-center min-h-screen">
      <Head title="Wilson Goltara"/>
      <AppContext.Provider value={{nav, setNav}}>
        <NavBar/>
        <Suspense fallback={<div>Loading...</div>}>
          <Content>{children}</Content>
        </Suspense>
        <Footer/>
      </AppContext.Provider>
    </main>
  );
};

import {ChildrenProps} from '@interfaces/interfaceProps';
import {createContext, lazy, Suspense, useState} from 'react';
import Footer from '@patterns/Footer';
import NavBar from '@patterns/NavBar';
import Head from '@infra/components/Head';

const Content = lazy(() => import('@patterns/Content'));

export const AppContext = createContext(null);

export default function Layout({children}: ChildrenProps) {
  const [nav, setNav] = useState(false);

  return (
    <div className="flex flex-col justify-between items-center min-h-screen">
      <Head title="Wilson Goltara"/>
      <AppContext.Provider value={{nav, setNav}}>
        <NavBar/>
        <Suspense fallback={<div>Loading...</div>}>
          <Content>{children}</Content>
        </Suspense>
        <Footer/>
      </AppContext.Provider>
    </div>
  );
};

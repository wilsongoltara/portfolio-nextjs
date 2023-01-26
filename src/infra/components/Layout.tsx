import {ChildrenProps} from '@interfaces/interfaceProps';
import Footer from '@patterns/Footer';
import NavBar from '@patterns/NavBar';
import Head from '@infra/components/Head';
import AppContextProvider from '@infra/context/AppContext';
import dynamic from 'next/dynamic';

const Content = dynamic(() => import('@patterns/Content'));

export default function Layout({children}: ChildrenProps) {
  return (
    <>
      <Head>Wilson Goltara</Head>
      <AppContextProvider>
        <NavBar/>
        <Content>{children}</Content>
      </AppContextProvider>
      <Footer/>
    </>
  );
};

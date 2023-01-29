import {ChildrenProps} from '@interfaces/interfaceProps';
import Footer from '@patterns/Footer';
import NavBar from '@patterns/NavBar';
import Head from '@infra/components/Head';
import AppContextProvider from '@infra/context/AppContext';

export default function Layout({children}: ChildrenProps) {
  return (
    <>
      <Head>Wilson Goltara</Head>
      <AppContextProvider>
        <NavBar/>
        <main className='size-box'>{children}</main>
      </AppContextProvider>
      <Footer/>
    </>
  );
};

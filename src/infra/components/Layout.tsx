import Head from '@infra/components/Head';
import { AppContext } from '@infra/context/AppContext';
import { ChildrenProps } from '@interfaces/interfaceProps';
import Footer from '@patterns/Footer';
import NavBar from '@patterns/NavBar';
import { useContext } from 'react';

export default function Layout({children}: ChildrenProps) {
  const {nav} = useContext(AppContext);
  
  return (
    <>
      <Head>Wilson Goltara</Head>
      <NavBar/>
      <main className='size-box'>{!nav && children}</main>
      <Footer/>
    </>
  );
};

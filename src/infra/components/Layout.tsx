import Head from '@infra/components/Head';
import { ChildrenProps } from '@interfaces/interfaceProps';
import Footer from '@patterns/Footer';
import NavBar from '@patterns/NavBar';
import { useAppContext } from '@infra/context/AppContext';

export default function Layout({ children }: Readonly<ChildrenProps>) {
  const { nav } = useAppContext();
  
  return (
    <>
      <Head>Wilson Goltara</Head>
      <NavBar/>
      <main className='size-box'>{!nav && children}</main>
      <Footer/>
    </>
  );
};

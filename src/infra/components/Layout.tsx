import {ChildrenProps} from '@interfaces/interfaceProps';
import Footer from '@patterns/Footer';
import NavBar from '@patterns/NavBar';
import Head from '@infra/components/Head';
import Content from '@patterns/Content';
import AppContextProvider from '@infra/context/AppContext';

export default function Layout({children}: ChildrenProps) {

  return (
    <div className="layout">
      <Head>Wilson Goltara</Head>
      <AppContextProvider>
        <NavBar/>
        <Content>{children}</Content>
      </AppContextProvider>
      <Footer/>
    </div>
  );
};

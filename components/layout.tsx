import { ChildrinProps } from 'intefaces/intefaces';
import Content from './global/Content';
import Footer from './global/Footer';
import NavBar from './global/NavBar';

export default function Layout({ children }: ChildrinProps) {
  return (
    <>
      <NavBar />
      <Content>{children}</Content>
      <Footer />
    </>
  );
}

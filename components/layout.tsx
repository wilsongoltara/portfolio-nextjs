import { ChildrinProps } from '@interfaces/props';
import { createContext, useState, lazy, Suspense } from 'react';
import Footer from './global/Footer';
import NavBar from './global/NavBar';

const Content = lazy(() => import('./global/Content'));

export const AppContext = createContext(null);

export default function Layout({ children }: ChildrinProps) {
  const [nav, setNav] = useState(false);

  return (
    <AppContext.Provider value={{ nav, setNav }}>
      <main className='flex flex-col justify-between items-center min-h-screen'>
        <NavBar />
        <Suspense fallback={<div>Loading...</div>}>
          <Content>{children}</Content>
        </Suspense>
        <Footer />
      </main>
    </AppContext.Provider>
  );
};

import Layout from '@infra/components/Layout';
import AppContextProvider from '@infra/context/AppContext';
import { Analytics } from '@vercel/analytics/react';
import { AnimatePresence } from 'framer-motion';
import type { AppProps } from 'next/app';
import '../styles/globals.css';


export default function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <AppContextProvider>
      <Layout>
        <AnimatePresence mode={'wait'} >
          <Component key={router.pathname} {...pageProps} />
          <Analytics />
        </AnimatePresence>
      </Layout>
    </AppContextProvider>
  );
}

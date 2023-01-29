import Layout from '@infra/components/Layout';
import type { AppProps } from 'next/app';
import {AnimatePresence} from 'framer-motion';
import '../styles/globals.css';

export default function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <Layout>
      <AnimatePresence mode={'wait'} >
        <Component key={router.pathname} {...pageProps} />
      </AnimatePresence>
    </Layout>
  );
}

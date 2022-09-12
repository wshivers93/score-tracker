import '../styles/globals.css';
import type {AppProps} from 'next/app';
import React from 'react';
import { RecoilRoot } from 'recoil';
import Layout from '../components/layout';

function MyApp({Component, pageProps}: AppProps) {
  return (
    <RecoilRoot>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </RecoilRoot>
  );
}

export default MyApp;

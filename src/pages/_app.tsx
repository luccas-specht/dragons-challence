import type { AppProps } from 'next/app';
import Head from 'next/head';

import { LoggedInUserProvider } from '~/contexts';

import '~/styles/globals.scss';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <LoggedInUserProvider>
    <Head>
      <meta charSet="utf-8" name="viewport" />
    </Head>
    <Component {...pageProps} />
  </LoggedInUserProvider>
);

export default MyApp;

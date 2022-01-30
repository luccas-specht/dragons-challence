import type { AppProps } from 'next/app';

import { LoggedInUserProvider } from '~/contexts';

import '~/styles/globals.css';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <LoggedInUserProvider>
    <Component {...pageProps} />
  </LoggedInUserProvider>
);

export default MyApp;

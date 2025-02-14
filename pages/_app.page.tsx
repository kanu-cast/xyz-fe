import '../i18n';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/global.css';
import { ContextProvider } from './context';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ContextProvider>
      <Head>
        <title>XYZ</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </ContextProvider>
  );
}

import type { AppProps } from 'next/app';
import { Layout } from '../components/Layout';
import { GlobalStyle } from '../styles/global';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <GlobalStyle />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;

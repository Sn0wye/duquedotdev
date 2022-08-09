import Head from 'next/head';
import { PropsWithChildren } from 'react';
import { Footer } from '../Footer';
import { Navbar } from '../Navbar';
import { Container } from './styles';

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <Container>
      <Head>
        <title>&lt;duque.dev &#47;&gt;</title>
      </Head>

      <Navbar />
      {children}
      <Footer />
    </Container>
  );
};

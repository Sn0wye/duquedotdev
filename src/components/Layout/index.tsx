import Head from 'next/head';
import { PropsWithChildren } from 'react';
import { Footer } from '../Footer';
import { Header } from '../Header';

export const Layout = ({ children }: PropsWithChildren) => {
    return (
        <>
            <Head>
                <title>&lt;duque.dev &#47;&gt;</title>
            </Head>

            <Header />
            {children}
            <Footer />
        </>
    );
};

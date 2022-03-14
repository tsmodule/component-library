import "../styles/index.css";

import type { AppProps } from "next/app";
import Head from "next/head";

import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { StrictMode } from "react";

function App({ Component: PageComponent, pageProps }: AppProps) {
  return (
    <StrictMode>
      {/* Default <head> overrides. */}
      <Head>
        <title>Next.js Starter</title>
        <meta name="description" content="Created with Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Page layout. */}
      <>
        <Header />
        <PageComponent {...pageProps} />
        <Footer />
      </>
    </StrictMode>
  );
}

export default App;

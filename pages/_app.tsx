import type { AppProps } from "next/app";
import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Head>
        <title>Fig+</title>
      </Head>
    </>
  );
}

export default MyApp;

import type { AppProps } from "next/app";
import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import { AuthProvider } from "../../contexts/AuthContext";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <Head>
    <title>Fig+</title>
    </Head>
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
    </>
  );
}

export default MyApp;

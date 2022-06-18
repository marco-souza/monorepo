import { AppProps } from 'next/app';
import Head from 'next/head';

import 'styles/globals.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to Web</title>
      </Head>

      <nav className='w-screen fixed p-4 bg-[#231030] top-0 shadow-lg'>
        <div className="max-w-4xl mx-auto">
          <h1 className="fw-bold text-white">Playground</h1>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto mt-24">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default CustomApp;

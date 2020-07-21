import { AppProps } from 'next/app';
import Head from 'next/head';

import GlobalStyles from 'styles/global';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Next.js - Boilerplate</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="Simple Next.js boilerplate with lint-staged, husky, eslint + prettier, jest, storybook and styled-components"
        />
      </Head>

      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default App;

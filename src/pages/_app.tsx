import { AppProps } from 'next/app';

import { CSSReset, ThemeProvider } from '@chakra-ui/core';

const app = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider>
    <CSSReset />
    <Component {...pageProps} />
  </ThemeProvider>
);

export default app;

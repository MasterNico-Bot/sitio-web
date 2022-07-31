import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { Navbar } from '../components/Navbar';
import { darkTheme } from '../theme';
import NextNProgress from 'nextjs-progressbar';

import '../styles/modules.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={darkTheme}>
      <NextNProgress color="#e35234" />
      <Navbar />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;

import { extendTheme, type Theme } from '@chakra-ui/react';
// @ts-ignore
import { mode } from '@chakra-ui/theme-tools';

export const darkTheme = extendTheme({
  config: {
    useSystemColorMode: false,
    initialColorMode: 'dark'
  },
  styles: {
    global: props => ({
      body: {
        bg: mode('#fff', '#202020')(props),
        minH: '100vh'
      }
    })
  },
  fonts: {
    heading: 'Poppins',
    body: 'Inter',
    mono: 'Poppins'
  }
} as Partial<Theme>);

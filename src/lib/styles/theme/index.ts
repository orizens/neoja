import { extendTheme } from "@chakra-ui/react";

import { config } from "./config";

const backgroundImage = "url(https://images.unsplash.com/photo-1528715471579-d1bcf0ba5e83?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1193&q=80)";
export const theme = extendTheme({
  fonts: {
    heading: "Plus Jakarta Sans, sans-serif",
    body: "Plus Jakarta Sans, sans-serif",
  },
  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '3.75rem',
    '7xl': '4.5rem',
    '8xl': '6rem',
    '9xl': '15rem',
  },
  components: {
    // Button: {
    // }
  },
  config,
  styles: {
    global: {
      body: {
        backgroundImage,
        backgroundSize: "contain",
        backdropFilter: "blur(3rem)",
      },
      '#root': {
        overflow: 'auto'
      },
      ":not(:root):fullscreen::backdrop": {
        background: backgroundImage
      }
    },
  },
});

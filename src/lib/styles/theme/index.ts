import { extendTheme } from "@chakra-ui/react";

import { config } from "./config";

export const theme = extendTheme({
  fonts: {
    heading: "Plus Jakarta Sans, sans-serif",
    body: "Plus Jakarta Sans, sans-serif",
  },
  components: {
    // Button: {
    // }
  },
  config,
  styles: {
    global: {
      body: {
        backgroundImage:
          "url(https://images.unsplash.com/photo-1528715471579-d1bcf0ba5e83?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1193&q=80)",
        backgroundSize: "contain",
        backdropFilter: "blur(3rem)",
      },
      '#root': {
        overflow: 'auto'
      }
    },
  },
});

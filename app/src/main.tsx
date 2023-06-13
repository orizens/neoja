import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
// import './index.css'
import { ColorModeScript } from "@chakra-ui/react";

import "@fontsource/plus-jakarta-sans/latin.css";

import { theme } from "./lib/styles/theme";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ColorModeScript initialColorMode={theme.config?.initialColorMode} />
    <App />
  </React.StrictMode>,
)

postMessage({ payload: 'removeLoading' }, '*')

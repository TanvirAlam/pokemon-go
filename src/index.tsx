import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from "@chakra-ui/react";
import GlobalStyles from './globalStyles';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <GlobalStyles />
        <ChakraProvider>
          <App />
        </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);

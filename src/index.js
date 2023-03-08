import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
// import { createRoot } from 'react-dom/client'

import App from './components/App';

const theme = createTheme({});
// const container = document.getElementById('app')
const root = ReactDOM.createRoot(document.getElementById('root')); // createRoot(container!) if you use TypeScript
root.render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <App tab="home" />
    </BrowserRouter>
  </ThemeProvider>
);

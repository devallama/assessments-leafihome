import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { SWRConfig } from 'swr';
import fetcher from './lib/fetcher';

import { ThemeProvider } from 'styled-components';
import theme from 'Theme/lightTheme';
import router from './router';

import { GlobalStyles } from 'Global/Global.styled';

const App = () => (
    <SWRConfig
        value={{
            fetcher
        }}
    >
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <RouterProvider router={router} />
        </ThemeProvider>
    </SWRConfig>
);

export default App;

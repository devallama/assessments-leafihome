import React from 'react';
import { RouterProvider } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';
import theme from 'Theme/lightTheme';
import router from './router';

const App = () => (
    <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
    </ThemeProvider>
);

export default App;

import React from 'react';
import { createBrowserRouter, Link } from 'react-router-dom';

const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <div>
                <h1>Hello World</h1>
                <Link to="about">About Us</Link>
            </div>
        )
    }
]);

export default router;

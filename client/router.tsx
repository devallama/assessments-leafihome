import React from 'react';
import { createBrowserRouter, Link } from 'react-router-dom';

import MainLayout from 'Layout/Main';

import CompaniesPage from 'Pages/Companies';
import CompanyPage from 'Pages/Companies/Company';
import CompanyCreatePage from 'Pages/Companies/Create';
import CompanyPeoplePage from 'Pages/Companies/People';

import PersonPage from 'Pages/Person';
import PersonCreatePage from 'Pages/Person/Create';

const router = createBrowserRouter([
    {
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: (
                    <div>
                        <h1>Hello World</h1>
                        <Link to="about">About Us</Link>
                    </div>
                )
            },
            {
                path: '/companies',
                children: [
                    {
                        index: true,
                        element: <CompaniesPage />
                    },
                    {
                        path: ':id',
                        children: [
                            {
                                index: true,
                                element: <CompanyPage />
                            },
                            {
                                path: 'people',
                                element: <CompanyPeoplePage />
                            }
                        ]
                    },
                    {
                        path: 'create',
                        element: <CompanyCreatePage />
                    }
                ]
            },
            {
                path: '/people',
                children: [
                    {
                        path: ':id',
                        element: <PersonPage />
                    },
                    {
                        path: 'create/:id',
                        element: <PersonCreatePage />
                    }
                ]
            }
        ]
    }
]);

export default router;

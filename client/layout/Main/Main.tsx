import React from 'react';
import { Outlet } from 'react-router-dom';

import Navigation, { Props as NavigationProps } from 'Organisms/Navigation';
import { Content } from './Main.styled';

const navigationLinks: NavigationProps['links'] = [
    {
        id: 'companies',
        label: 'Companies',
        to: '/companies'
    }
];

const Main: React.FC = () => {
    return (
        <div>
            <Navigation links={navigationLinks} />
            <Content>
                <Outlet />
            </Content>
        </div>
    );
};

export default Main;

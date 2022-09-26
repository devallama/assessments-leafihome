import React from 'react';

import { GridStyled } from './Grid.styled';

const Grid: React.FC<React.PropsWithChildren> = props => {
    const { children } = props;

    return <GridStyled>{children}</GridStyled>;
};

export default Grid;

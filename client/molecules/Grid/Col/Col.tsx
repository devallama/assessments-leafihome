import React from 'react';
import type CSSType from 'csstype';

import { ColStyled } from './Col.styled';

export interface Props extends React.PropsWithChildren {
    spans?: number | Record<string, number | [number, number]>;
    align?: CSSType.Property.AlignSelf;
    justify?: CSSType.Property.JustifySelf;
}

const Col: React.FC<Props> = props => {
    const { spans, align, justify, children } = props;

    return (
        <ColStyled $spans={spans} $align={align} $justify={justify}>
            {children}
        </ColStyled>
    );
};

export default Col;

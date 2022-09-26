import React from 'react';
import { LinkProps } from 'react-router-dom';

import { StyledLink } from './Link.styled';

export interface Props extends LinkProps {
    label?: string;
    openInNewTab?: boolean;
}

const Link: React.FC<Props> = props => {
    const { children, label, openInNewTab, ...rest } = props;

    return (
        <StyledLink
            rel={openInNewTab ? 'noopener nofollow' : undefined}
            target={openInNewTab ? '_blank' : undefined}
            {...rest}
        >
            {label ? label : children}
        </StyledLink>
    );
};

export default Link;

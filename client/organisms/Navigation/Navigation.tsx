import React from 'react';

import type { Props as LinkProps } from 'Atoms/Link';

import {
    Container,
    Inner,
    TitleContainer,
    Logo,
    Title,
    Nav,
    List,
    Item,
    Link,
    LinkIcon
} from './Navigation.styled';

export interface Props {
    links: LinkProps[];
}

const Navigation: React.FC<Props> = props => {
    const { links } = props;

    return (
        <Container>
            <Inner>
                <TitleContainer>
                    <Logo />
                    <Title>Company List</Title>
                </TitleContainer>
                <Nav>
                    <List>
                        {links.map(({ id, label, ...rest }) => (
                            <Item key={id}>
                                <Link {...rest}>
                                    {label}
                                    <LinkIcon />
                                </Link>
                            </Item>
                        ))}
                    </List>
                </Nav>
            </Inner>
        </Container>
    );
};

export default Navigation;

import React from 'react';

import { Container, HeadshotWrapper, Headshot, Name } from './PersonCard.styled';

import headshotPNG from 'Public/images/headshot.png';

export interface Props {
    id: string;
    name: string;
}

const PersonCard: React.FC<Props> = props => {
    const { id, name } = props;

    return (
        <Container>
            <HeadshotWrapper>
                <Headshot src={headshotPNG} alt="" />
            </HeadshotWrapper>
            <Name to={`/people/${id}`}>{name}</Name>
        </Container>
    );
};

export default PersonCard;

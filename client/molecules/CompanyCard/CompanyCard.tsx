import React from 'react';

import {
    Container,
    NameWrapper,
    ColorBlock,
    Name,
    Details,
    Heading,
    Detail
} from './CompanyCard.styled';

export interface Props {
    id: string;
    name: string;
    address: string;
    revenue: string;
    phone: string;
    color: string;
}

const CompanyCard: React.FC<Props> = props => {
    const { id, name, address, revenue, phone, color } = props;

    return (
        <Container>
            <NameWrapper to={`/companies/${id}`}>
                <ColorBlock $color={color} />
                <Name>{name}</Name>
            </NameWrapper>
            <Details>
                <Heading>Address</Heading>
                <Detail>{address}</Detail>
                <Heading>Revenue</Heading>
                <Detail>${revenue}</Detail>
                <Heading>Phone number</Heading>
                <Detail>{phone}</Detail>
            </Details>
        </Container>
    );
};

export default CompanyCard;

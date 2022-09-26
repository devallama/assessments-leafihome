import styled from 'styled-components';

import Image from 'Atoms/Image';
import Link from 'Atoms/Link';

export const Container = styled.article`
    padding: 1.25rem 1rem;
    border-radius: 1rem;
    background: ${({ theme }) => theme.colors.background};
    position: relative;
    overflow: hidden;
    box-shadow: 0.125rem 0.125rem 0.25rem #00000000;
    transition: box-shadow 200ms ease;
    display: flex;
    align-items: center;

    &:hover {
        box-shadow: 0.125rem 0.125rem 0.25rem #00000029;
    }
`;

export const HeadshotWrapper = styled.div`
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    overflow: hidden;
`;

export const Headshot = styled(Image)`
    object-fit: cover;
`;

export const Name = styled(Link)`
    margin-left: 0.5rem;
    font-weight: 500;
    font-size: 1.5rem;

    &:before {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
    }
`;

import styled from 'styled-components';

import Link from 'Atoms/Link';

export const Container = styled.article`
    background: ${({ theme }) => theme.colors.background};
    padding: 2rem 1.5rem;
    height: 100%;
    border-radius: 1rem;
    overflow: hidden;
    position: relative;
    box-shadow: 0.125rem 0.125rem 0.25rem #00000000;
    transition: box-shadow 200ms ease;

    &:hover {
        box-shadow: 0.125rem 0.125rem 0.25rem #00000029;
    }
`;

export const NameWrapper = styled(Link)`
    display: flex;
    align-items: center;
    margin-bottom: 1rem;

    &:before {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
    }
`;

export const ColorBlock = styled.div<{ $color: string }>`
    height: 3.25rem;
    width: 3.25rem;
    background-color: ${({ $color }) => $color};
    border-radius: 0.75rem;
`;

export const Name = styled.h2`
    font-size: 2rem;
    margin: 0 0 0 0.75rem;
`;

export const Details = styled.div``;

export const Heading = styled.h3`
    margin: 0.5rem 0 0;
`;

export const Detail = styled.p`
    margin: 0.5rem 0 0;
`;

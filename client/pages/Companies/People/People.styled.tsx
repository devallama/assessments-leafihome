import styled, { css } from 'styled-components';

export const Main = styled.main`
    background-color: ${({ theme }) => theme.colors.secondary};
`;

export const List = styled.ul`
    ${({ theme }) => css`
        list-style: none;
        display: grid;
        gap: 1rem;
        grid-template-columns: repeat(1, 1fr);
        margin: 2rem 0;
        padding: 0;

        @media ${theme.breakpoints.medium.media} {
            grid-template-columns: repeat(2, 1fr);
        }

        @media ${theme.breakpoints.large.media} {
            grid-template-columns: repeat(3, 1fr);
            margin: 4rem 0;
        }

        @media ${theme.breakpoints.huge.media} {
            grid-template-columns: repeat(4, 1fr);
        }
    `}
`;

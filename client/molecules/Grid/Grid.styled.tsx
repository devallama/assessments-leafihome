import styled, { css } from 'styled-components';

export const GridStyled = styled.div`
    ${({ theme }) => css`
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        grid-column-gap: 0.5rem;
        position: relative;
        margin: 0 auto;
        padding: 0 0.75rem;
        max-width: 82.25rem;

        @media ${theme.breakpoints.medium.media} {
            padding: 0 1rem;
            grid-column-gap: 0.75rem;
        }

        @media ${theme.breakpoints.large.media} {
            grid-column-gap: 1rem;
        }
    `}
`;

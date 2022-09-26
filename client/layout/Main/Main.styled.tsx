import styled, { css } from 'styled-components';

export const Content = styled.div`
    ${({ theme }) => css`
        margin-top: 1.5rem;

        @media ${theme.breakpoints.colossal.media} {
            margin-top: 4.5rem;
        }
    `}
`;

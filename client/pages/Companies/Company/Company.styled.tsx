import styled, { css } from 'styled-components';

export const People = styled.ul`
    ${({ theme }) => css`
        list-style: none;
        margin: 0 0 2rem;
        padding: 1.5rem 0;
        display: grid;
        gap: 1.25rem;
        grid-template-columns: repeat(1, 1fr);
        position: relative;

        @media ${theme.breakpoints.medium.media} {
            grid-template-columns: repeat(2, 1fr);
        }

        @media ${theme.breakpoints.large.media} {
            padding: 2.25rem 0;
        }

        &:before {
            content: '';
            position: absolute;
            top: 0;
            right: -0.5rem;
            bottom: 0;
            left: -0.5rem;
            background: ${({ theme }) => theme.colors.secondary};
            border-radius: 0.75rem;
            z-index: -1;

            @media ${theme.breakpoints.medium.media} {
                right: -0.75rem;
                left: -0.75rem;
            }

            @media ${theme.breakpoints.large.media} {
                right: -4vw;
                left: -50vw;
            }
        }
    `}
`;

export const Person = styled.li`
    padding: 0;
    margin: 0;
`;

export const AddressLine = styled.span`
    display: block;
`;

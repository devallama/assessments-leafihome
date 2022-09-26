import styled, { css } from 'styled-components';

export const ButtonStyled = styled.button`
    ${({ theme }) => css`
        background: ${theme.colors.primary};
        color: ${theme.colors.primaryContrast};
        font-size: 1.5rem;
        padding: 1.25rem 1.5rem;
        border-radius: 0.5rem;
        cursor: pointer;
        transition: all 250ms ease;
        border: none;

        &:hover {
            background: #374f9c;
            border-radius: 0.25rem;
        }
    `}
`;

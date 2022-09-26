import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    ${({ theme }) => css`
        body {
            padding: 0;
            margin: 0;
            box-sizing: border-box;

            * {
                box-sizing: inherit;
            }
        }

        body,
        textarea,
        input,
        button {
            font-family: interstate, 'Calibri', sans-serif;
            color: ${theme.colors.text};
            font-weight: 400;
            font-size: 1.125rem;
        }

        p {
            line-height: 1.625rem;
        }

        h1 {
            font-size: 2.375rem;
            font-weight: 500;
            line-height: 2.75rem;
        }

        h2 {
            font-size: 2rem;
            font-weight: 400;
            line-height: 2.5rem;
        }
    `}
`;

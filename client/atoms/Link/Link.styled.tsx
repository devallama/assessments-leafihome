import styled from 'styled-components';

import { Link as RouterLink } from 'react-router-dom';

export const StyledLink = styled(RouterLink)`
    color: ${({ theme }) => theme.colors.link};
    text-decoration-thickness: 0.0625rem;

    &:hover {
        text-decoration-thickness: 0.125rem;
    }
`;

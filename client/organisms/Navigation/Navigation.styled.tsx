import styled, { css } from 'styled-components';

import BaseLink from 'Atoms/Link';
import { ReactComponent as Chevron } from 'Public/icons/chevron.svg';

import { ReactComponent as Rocket } from 'Public/icons/rocket-outline.svg';

export const Container = styled.div`
    ${({ theme }) => css`
        padding: 2rem 1rem;
        background-color: ${theme.colors.background};
        border-bottom: 0.0625rem solid #ebebeb;

        @media ${theme.breakpoints.colossal.media} {
            position: fixed;
            top: 0;
            bottom: 0;
            left: 0;
            width: 16.875rem;
            padding: 4rem 1rem;
            box-shadow: 0rem 0.125rem 0.5rem #3247614f;
        }
    `}
`;

export const Inner = styled.div`
    max-width: 80.25rem;
    margin: 0 auto;
`;

export const TitleContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const Logo = styled(Rocket)`
    width: 2.5rem;
    height: 2.5rem;
`;

export const Title = styled.span`
    font-weight: 400;
    font-size: 1.75rem;
    padding-left: 0.5rem;
`;

export const Nav = styled.nav`
    ${({ theme }) => css`
        margin: 2rem 0 0;

        @media ${theme.breakpoints.colossal.media} {
            margin: 2.5rem 0;
        }
    `}
`;

export const List = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`;

export const Item = styled.li`
    padding: 0;
    margin: 0;
`;

export const Link = styled(BaseLink)`
    font-size: 1.5rem;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
`;

export const LinkIcon = styled(Chevron)`
    height: 2rem;
    padding-left: 0.5rem;
    transition: all 250ms ease;

    ${Link}:hover & {
        padding-left: 1rem;
    }
`;

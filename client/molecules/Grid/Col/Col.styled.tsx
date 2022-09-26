import styled, { css } from 'styled-components';
import type CSSType from 'csstype';

interface ColStyledProps {
    $spans?: number | Record<string, number | [number, number]>;
    $align?: CSSType.Property.AlignSelf;
    $justify?: CSSType.Property.JustifySelf;
}

export const ColStyled = styled.div<ColStyledProps>`
    grid-column-start: span 12;

    ${({ $align, $justify }) => css`
        justify-self: ${$justify};
        align-self: ${$align};
    `}

    ${({ theme, $spans }) => {
        if (typeof $spans === 'number') {
            return css`
                grid-column-start: span ${$spans};
            `;
        } else if (typeof $spans === 'object') {
            return Object.keys($spans).map(key => {
                if (!$spans[key]) return null;

                const breakpoint = Object.keys(theme.breakpoints).find(
                    bpKey =>
                        theme.breakpoints[bpKey].shortName === key ||
                        theme.breakpoints[bpKey].name === key
                );

                if (breakpoint) {
                    if (Array.isArray($spans[key])) {
                        return css`
                            @media ${theme.breakpoints[breakpoint].media} {
                                grid-column-start: ${$spans[key][0]};
                                grid-column-end: ${$spans[key][1]};
                            }
                        `;
                    } else {
                        return css`
                            @media ${theme.breakpoints[breakpoint].media} {
                                grid-column-start: span ${$spans[key]};
                                grid-column-end: unset;
                            }
                        `;
                    }
                }
            });
        }
    }}
`;

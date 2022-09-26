import type { Breakpoint } from '../types/breakpoints.type';

const generateMedia = (value: number, type: 'min' | 'max'): string => {
    return `only screen and (${type}-width: ${value}px)`;
};

export const generateBreakpoint = (name: string, shortName: string, value: number): Breakpoint => {
    return {
        name,
        shortName,
        value,
        media: generateMedia(value, 'min'),
        mediaMax: generateMedia(value, 'max')
    };
};

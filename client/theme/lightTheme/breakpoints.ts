/* eslint-disable @typescript-eslint/no-magic-numbers */
import type { Breakpoints } from '../types/breakpoints.type';
import { generateBreakpoint } from '../util/breakpoint';

const breakpoints: Breakpoints = {
    base: generateBreakpoint('base', 'b', 0),
    small: generateBreakpoint('small', 's', 320),
    medium: generateBreakpoint('medium', 'm', 768),
    large: generateBreakpoint('large', 'l', 1024),
    huge: generateBreakpoint('huge', 'h', 1400),
    colossal: generateBreakpoint('colossal', 'c', 1920)
};

export default breakpoints;

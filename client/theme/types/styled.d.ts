// styled.d.ts
import 'styled-components';

import type { Breakpoints } from './breakpoints.type';
export type { Colors } from './colors.type';

declare module 'styled-components' {
    export interface DefaultTheme {
        name: string;
        colors: Colors;
        breakpoints: Breakpoints;
    }
}

export interface Breakpoint {
    name: string;
    shortName: string;
    media: string;
    mediaMax: string;
    value: number;
}

export interface Breakpoints {
    base: Breakpoint;
    small: Breakpoint;
    medium: Breakpoint;
    large: Breakpoint;
    huge: Breakpoint;
    colossal: Breakpoint;
}

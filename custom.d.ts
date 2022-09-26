declare module '*.svg' {
    export const ReactComponent: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
    
    const content: string;
    export default content;
}

declare module '*.png' {
    const src: string;
    export default src;
}
import React from 'react';

export type Props = React.ImgHTMLAttributes<HTMLImageElement>;

const Image: React.FC<Props> = props => <img loading="lazy" {...props} />;

export default Image;

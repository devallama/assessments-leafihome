import React from 'react';

import { LabelStyled } from './Label.styled';

export type Props = React.LabelHTMLAttributes<HTMLLabelElement>;

const Label: React.FC<Props> = props => <LabelStyled {...props} />;

export default Label;

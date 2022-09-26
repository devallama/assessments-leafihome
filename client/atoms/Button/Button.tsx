import React from 'react';

import { ButtonStyled } from './Button.styled';

export type Props = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<Props> = props => <ButtonStyled {...props} />;

export default Button;

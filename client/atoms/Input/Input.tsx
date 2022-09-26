import React from 'react';

import { InputStyled } from './Input.styled';

export type Props = React.InputHTMLAttributes<HTMLInputElement>;

const Input: React.FC<Props> = props => <InputStyled {...props} />;

export default Input;

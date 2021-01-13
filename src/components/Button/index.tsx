import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

/* Interface usada para passar os atributos de um button do html padrão para o button criado,
porém como não estamos sobrescrevendo nenhuma propriedade como foi feito no input, ao invés de interface
é usado type */
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => (
  <Container type="button" {...rest}>
    {children}
  </Container>
);

export default Button;

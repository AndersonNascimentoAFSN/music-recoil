import { ReactNode, ComponentProps } from "react";

import { ButtonContainer, ButtonVariantsStyles } from "./styles";


type ButtonProps = ComponentProps<typeof ButtonContainer> & {
  children: ReactNode;
  variant?: ButtonVariantsStyles;
};

export function Button({
  children,
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <ButtonContainer variant={variant} {...props}>
      {children}
    </ButtonContainer>
  );
}

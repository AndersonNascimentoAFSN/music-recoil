import styled, { css } from "styled-components";

export type ButtonVariantsStyles = "primary" | "secondary";

type ButtonContainerProps = {
  variant: ButtonVariantsStyles;
};

export const ButtonContainer = styled.button<ButtonContainerProps>`
  border-radius: 8px;
  padding: 1rem 2rem;
  font-size: 1rem;
  font-family: ${({ theme }) => theme.FONT_FAMILY.primary};

  color: ${({ theme }) => theme.COLORS.WHITE};
  cursor: pointer;
  border: none;

  ${(props) =>
    props.variant === "primary" &&
    css`
      background-color: ${(props) => props.theme.COLORS.GREEN_500};
    `}
`;

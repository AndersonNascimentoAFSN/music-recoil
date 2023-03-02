import { ReactNode, ComponentProps } from "react";
import { HeadingContainer, HeadingSizesStyles } from "./styles";

type HeadingProps = ComponentProps<typeof HeadingContainer> & {
  children: ReactNode;
  size?: HeadingSizesStyles;
  css?: {};
};

export function Heading({
  children,
  size = "sm",
  css,
  ...props
}: HeadingProps) {
  return (
    <HeadingContainer style={css} size={size} {...props}>
      {children}
    </HeadingContainer>
  );
}

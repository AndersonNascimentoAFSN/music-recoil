import styled, { css } from "styled-components";

export type HeadingSizesStyles = "sm" | "md" | "lg";

type HeadingContainerProps = {
  size: HeadingSizesStyles;
};

export const HeadingContainer = styled.h2<HeadingContainerProps>`
  all: unset;
  line-height: 160%;
  font-weight: ${(props) => props.theme.FONT_WEIGHT.BOLD_800};

  ${(props) =>
    props.size === "sm" &&
    css`
      font-size: 1.125rem;
    `}

  ${(props) =>
    props.size === "md" &&
    css`
      font-size: 1.5rem;
    `}

  ${(props) =>
    props.size === "lg" &&
    css`
      font-size: 5rem;
    `}
`;

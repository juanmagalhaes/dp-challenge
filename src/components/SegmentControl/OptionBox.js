import React from "react";
import styled from "styled-components";

import { colors, spacing } from "app/styles";

const Box = {};

Box.Inner = styled.div`
  background-color: ${({ dark }) => (dark ? colors.elm : colors.white)};
  border: solid 1px ${({ dark }) => (dark ? colors.elm : colors.jellyBean)};
  border-radius: ${spacing.px.medium};
  display: inline-flex;
  padding: ${spacing.px.small};
  width: 100%;
`;

Box.Outer = styled.div`
  background-color: ${({ dark }) => (dark ? colors.jellyBean : colors.white)};
  display: inline-flex;
  padding: ${spacing.px.large};
  ${({ width }) =>
    width &&
    `
    width: ${width};
  `}

  ${({ small }) =>
    small &&
    `
    padding: ${spacing.px.medium};
  `}

  ${({ mini }) =>
    mini &&
    `
    padding: ${spacing.px.small};
  `}
`;

export default ({ children, dark, ...rest }) => (
  <Box.Outer dark={dark} {...rest}>
    <Box.Inner dark={dark}>{children}</Box.Inner>
  </Box.Outer>
);

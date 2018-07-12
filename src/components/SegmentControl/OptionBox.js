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

  ${({ small }) =>
    small &&
    `
    padding: ${spacing.px.medium};
  `} ${({ mini, dark }) =>
    mini &&
    `
    background: ${colors.catskillWhite};
    border-radius: ${spacing.px.small};
    padding: 0;

    ${dark &&
      `
      background: ${colors.elm};
    `}
  `};
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
    padding: ${spacing.px.medium};
  `}
`;

export default ({ children, ...rest }) => (
  <Box.Outer {...rest}>
    <Box.Inner {...rest}>{children}</Box.Inner>
  </Box.Outer>
);

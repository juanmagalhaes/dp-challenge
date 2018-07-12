import styled from "styled-components";
import PropTypes from "prop-types";

import { colors, spacing } from "app/styles";

const Option = styled.span`
  background-color: ${({ dark }) => (dark ? colors.elm : colors.white)};
  border-radius: ${spacing.px.small};
  box-sizing: border-box;
  color: ${({ dark }) => (dark ? colors.white : colors.jellyBean)};
  cursor: pointer;
  font-size: 1.3rem;
  padding: ${spacing.px.large} ${spacing.px.larger};
  text-align: center;
  user-select: none;

  ${({ small }) =>
    small &&
    `
    padding: ${spacing.px.medium} ${spacing.px.large};
  `}

  ${({ width }) => width && `flex: 1;`}

  ${({ active, dark }) =>
    active &&
    `
    background-color: ${dark ? colors.white : colors.jellyBean};
    color: ${dark ? colors.jellyBean : colors.white};
  `}

  ${({ mini, active, dark }) =>
    mini &&
    `
    padding: ${spacing.px.small} ${spacing.px.medium};
    font-size: 1rem;

    ${!active &&
      !dark &&
      `
      background: ${colors.catskillWhite};
    `}
  `}

`;

Option.propTypes = {
  dark: PropTypes.bool,
  mini: PropTypes.bool,
  active: PropTypes.bool,
  small: PropTypes.bool,
  width: PropTypes.string
};

export default Option;

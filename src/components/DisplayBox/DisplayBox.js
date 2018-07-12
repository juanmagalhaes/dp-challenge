import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { spacing } from "app/styles";

const Title = styled.h2`
  margin: ${spacing.px.large};
  margin-bottom: -${spacing.px.large};
`;

const Box = styled.div`
  overflow: auto;
  padding: ${spacing.px.medium};
  width: 100%;
`;

Box.Inner = styled.div`
  border: solid 1px black;
  display: flex;
  margin: ${spacing.px.large};
`;

Box.Outter = styled.div`
  display: flex;
  flex-direction: column;
  margin: ${spacing.px.large};
`;

const DisplayBox = ({ children, title }) => (
  <Box.Outter>
    <Title>{title}</Title>
    <Box.Inner>
      <Box>{children}</Box>
    </Box.Inner>
  </Box.Outter>
);

DisplayBox.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired
};

export default DisplayBox;

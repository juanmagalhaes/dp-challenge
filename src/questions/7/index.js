import React, { Fragment } from "react";
import styled from "styled-components";

import { spacing } from "app/styles";
import SegmentControl, { Option } from "app/components/SegmentControl";

const Box = styled.div`
  padding: ${spacing.px.medium};
`;

const Question7 = () => (
  <Fragment>
    <Box>
      <SegmentControl>
        <Option>Option</Option>
      </SegmentControl>
    </Box>

    <Box>
      <SegmentControl>
        <Option>Option</Option>
        <Option>Option</Option>
      </SegmentControl>
    </Box>

    <Box>
      <SegmentControl>
        <Option>Option</Option>
        <Option selected>Option</Option>
        <Option>Option</Option>
      </SegmentControl>
    </Box>

    <Box>
      <SegmentControl dark width="800px">
        <Option>Option</Option>
        <Option>Option</Option>
      </SegmentControl>
    </Box>

    <Box>
      <SegmentControl dark>
        <Option>Option</Option>
        <Option>Option</Option>
        <Option selected>Option</Option>
      </SegmentControl>
    </Box>

    <Box>
      <SegmentControl small>
        <Option>Option</Option>
        <Option>Option</Option>
      </SegmentControl>
    </Box>

    <Box>
      <SegmentControl mini>
        <Option>Option</Option>
        <Option>Option</Option>
      </SegmentControl>
    </Box>
  </Fragment>
);

export default Question7;

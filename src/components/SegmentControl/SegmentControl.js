import React from "react";

import OptionBox from "./OptionBox";

const SegmentControl = ({ children, ...rest }) => (
  <OptionBox {...rest}>{children}</OptionBox>
);

export default SegmentControl;

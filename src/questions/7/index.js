import React, { Fragment } from "react";

import SegmentControl, { Option } from "app/components/SegmentControl";
import { DisplayBox } from "app/components";

const Question7 = () => (
  <Fragment>
    <DisplayBox title="With 2 options">
      <SegmentControl>
        <Option>Option</Option>
        <Option>Option</Option>
      </SegmentControl>
    </DisplayBox>

    <DisplayBox title="With 2 options and custom width">
      <SegmentControl width="550px">
        <Option>Option</Option>
        <Option>Option</Option>
      </SegmentControl>
    </DisplayBox>

    <DisplayBox title="With 3 options and the second is selected by default">
      <SegmentControl>
        <Option>Option</Option>
        <Option selected>Option</Option>
        <Option>Option</Option>
      </SegmentControl>
    </DisplayBox>

    <DisplayBox title="With several options">
      <SegmentControl>
        <Option>Option</Option>
        <Option>Option</Option>
        <Option>Option</Option>
        <Option>Option</Option>
        <Option>Option</Option>
        <Option>Option</Option>
        <Option>Option</Option>
        <Option>Option</Option>
        <Option>Option</Option>
        <Option>Option</Option>
      </SegmentControl>
    </DisplayBox>

    <DisplayBox title="Dark theme">
      <SegmentControl dark>
        <Option>Option</Option>
        <Option>Option</Option>
        <Option selected>Option</Option>
        <Option>Option</Option>
      </SegmentControl>
    </DisplayBox>

    <DisplayBox title="Small">
      <SegmentControl small>
        <Option>Option</Option>
        <Option>Option</Option>
      </SegmentControl>
    </DisplayBox>

    <DisplayBox title="Samll with dark theme">
      <SegmentControl dark small>
        <Option>Option</Option>
        <Option selected>Option</Option>
        <Option>Option</Option>
        <Option>Option</Option>
      </SegmentControl>
    </DisplayBox>

    <DisplayBox title="Mini">
      <SegmentControl mini>
        <Option>Option</Option>
        <Option>Option</Option>
        <Option>Option</Option>
        <Option>Option</Option>
        <Option>Option</Option>
      </SegmentControl>
    </DisplayBox>

    <DisplayBox title="Mini dark">
      <SegmentControl dark mini>
        <Option>Option</Option>
        <Option>Option</Option>
        <Option>Option</Option>
        <Option>Option</Option>
        <Option>Option</Option>
      </SegmentControl>
    </DisplayBox>

    <DisplayBox title="With change handler">
      <SegmentControl
        onChange={(_, idx) => alert(`You selected option ${idx + 1}`)}
      >
        <Option>Option</Option>
        <Option>Option</Option>
        <Option selected>Option</Option>
        <Option>Option</Option>
        <Option>Option</Option>
      </SegmentControl>
    </DisplayBox>

    <DisplayBox title="With Option click handler (click on Option 2)">
      <SegmentControl>
        <Option>Option</Option>
        <Option onClick={() => alert("Clicked on Option 2")}>Option</Option>
        <Option>Option</Option>
        <Option>Option</Option>
        <Option selected>Option</Option>
      </SegmentControl>
    </DisplayBox>
  </Fragment>
);

export default Question7;

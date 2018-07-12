import React from "react";
import SegmentControl, { Option } from "./";

describe("Question 7 => SegmentControl", () => {
  test("render with 2 children", () => {
    const component = shallow(
      <SegmentControl>
        <Option>Option 1</Option>
        <Option>Option 2</Option>
      </SegmentControl>
    );

    expect(component).toMatchSnapshot();
  });

  test("render with several children", () => {
    const component = shallow(
      <SegmentControl>
        <Option>Option 1</Option>
        <Option>Option 2</Option>
        <Option>Option 3</Option>
        <Option>Option 4</Option>
        <Option>Option 5</Option>
      </SegmentControl>
    );

    expect(component).toMatchSnapshot();
  });

  test("render with dark theme", () => {
    const component = shallow(
      <SegmentControl dark>
        <Option>Option 1</Option>
        <Option>Option 2</Option>
      </SegmentControl>
    );

    expect(component).toMatchSnapshot();
  });

  test("render with small prop", () => {
    const component = shallow(
      <SegmentControl small>
        <Option>Option 1</Option>
        <Option>Option 2</Option>
      </SegmentControl>
    );

    expect(component).toMatchSnapshot();
  });

  test("render with mini prop", () => {
    const component = shallow(
      <SegmentControl mini>
        <Option>Option 1</Option>
        <Option>Option 2</Option>
      </SegmentControl>
    );

    expect(component).toMatchSnapshot();
  });

  test("render with Option selected", () => {
    const component = shallow(
      <SegmentControl>
        <Option>Option 1</Option>
        <Option selected>Option 2</Option>
      </SegmentControl>
    );

    expect(component).toMatchSnapshot();
  });

  test("change handler", () => {
    const handlerMock = jest.fn();
    const component = shallow(
      <SegmentControl onChange={handlerMock}>
        <Option>Option 1</Option>
        <Option selected>Option 2</Option>
      </SegmentControl>
    );

    component.simulate("change");

    expect(handlerMock).toHaveBeenCalled();
  });

  test("change handler", () => {
    const handlerMock = jest.fn();
    const component = shallow(
      <SegmentControl onChange={handlerMock}>
        <Option>Option 1</Option>
        <Option>Option 2</Option>
      </SegmentControl>
    );

    expect(handlerMock).not.toHaveBeenCalled();
    component.simulate("change");
    expect(handlerMock).toHaveBeenCalled();
  });

  test("click handler", () => {
    const handlerMock = jest.fn();
    const component = shallow(
      <SegmentControl>
        <Option selected>Option 1</Option>
        <Option onClick={handlerMock}>Option 2</Option>
      </SegmentControl>
    );

    const option2 = component.find(Option).last();
    expect(handlerMock).not.toHaveBeenCalled();
    option2.simulate("click");
    expect(handlerMock).toHaveBeenCalled();
  });
});

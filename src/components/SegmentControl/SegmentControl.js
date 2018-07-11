import React from "react";
import PropTypes from "prop-types";

const SegmentControl = ({ active, children, onChange, onChildClick }) => {
  const enhanceChild = (child, index = 0) =>
    React.cloneElement(child, {
      active: active === index,
      onClick: evt => {
        onChildClick(index);
        if (onChange) {
          onChange({ ...evt, type: "change" }, index, child);
        }
        if (child.props.onClick) {
          child.props.onClick(evt);
        }
      }
    });

  if (!children.length) {
    return enhanceChild(children);
  }

  return children.map(enhanceChild);
};

SegmentControl.propTypes = {
  active: PropTypes.number.required,
  children: PropTypes.element.required,
  onChange: PropTypes.func,
  onChildClick: PropTypes.func.required
};

export default SegmentControl;

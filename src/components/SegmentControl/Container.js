import { cloneElement } from "react";
import {
  branch,
  compose,
  mapProps,
  renderNothing,
  setDisplayName,
  setPropTypes,
  setStatic,
  withState,
  withHandlers
} from "recompose";
import PropTypes from "prop-types";

import SegmentControl from "./SegmentControl";
import Option from "./Option";

const propTypes = {
  children: PropTypes.node.isRequired,
  dark: PropTypes.bool,
  mini: PropTypes.bool,
  onChange: PropTypes.func,
  selected: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  small: PropTypes.bool,
  width: PropTypes.string
};

export default compose(
  setPropTypes(propTypes),
  setDisplayName("SegmentControl"),
  setStatic("Option", Option),
  branch(({ children }) => !children, renderNothing),
  withState("active", "setActive", ({ children }) => {
    if (children.length) {
      const selectedChildren = children.findIndex(
        child => child.props.selected
      );
      if (selectedChildren !== -1) {
        return selectedChildren;
      }
    }

    return 0;
  }),
  withHandlers({
    onChildClick: ({ setActive }) => childIndex => setActive(childIndex)
  }),
  mapProps(({ children, ...props }) => {
    const enhanceChild = (child, index = 0) => {
      return cloneElement(child, {
        dark: props.dark,
        key: index,
        onClick: evt => {
          props.onChildClick(index);
          if (props.onChange) {
            props.onChange({ ...evt, type: "change" }, index);
          }
          if (child.props.onClick) {
            child.props.onClick(evt);
          }
        },
        mini: props.mini,
        selected: props.active === index,
        small: props.small,
        width: props.width,
        ...child.props
      });
    };

    return {
      ...props,
      children: !children.length
        ? enhanceChild(children)
        : children.map(enhanceChild)
    };
  })
)(SegmentControl);

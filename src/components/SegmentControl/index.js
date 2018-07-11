import { compose, mapProps, withState, withHandlers } from "recompose";
import PropTypes from "prop-types";

import SegmentControl from "./SegmentControl";

const EnhancedSegmentControl = compose(
  withState(
    "active",
    "setActive",
    ({ initialActiveIndex }) => initialActiveIndex || 0
  ),
  withHandlers({
    onChildClick: ({ setActive }) => childIndex => setActive(childIndex)
  }),
  mapProps(({ active, children, onChange, onChildClick }) => ({
    active,
    children,
    onChange,
    onChildClick
  }))
)(SegmentControl);

EnhancedSegmentControl.propTypes = {
  children: PropTypes.element.required,
  initialActiveIndex: PropTypes.number,
  onChange: PropTypes.func
};

export default EnhancedSegmentControl;

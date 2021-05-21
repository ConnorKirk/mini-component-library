/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const ProgressBar = ({ value, size }) => {
  return (
    <Base
      style={SIZES[size]}
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax="100"
    >
      <VisuallyHidden>{value}</VisuallyHidden>
      <Trimmer>
        <Bar value={value} />
      </Trimmer>
    </Base>
  );
};

const Base = styled.div`
  width: var(--width);
  height: var(--height);
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  background-color: ${COLORS.transparentGray15};
  border-radius: var(--border-radius);
  padding: var(--padding);
`;

const Bar = styled.div`
  width: ${(props) => props.value + "%"};
  height: 100%;
  background-color: ${COLORS.primary};
`;

const Trimmer = styled.div`
  border-radius: 16px;
  overflow: hidden;
  width: 100%;
  height: 100%;
`;
const SIZES = {
  small: {
    "--width": 370 + "px",
    "--height": 8 + "px",
    "--border-radius": 4 + "px",
  },
  medium: {
    "--width": 370 + "px",
    "--height": 12 + "px",
    "--border-radius": 4 + "px",
  },
  large: {
    "--width": 370 + "px",
    "--height": 24 + "px",
    "--border-radius": 8 + "px",
    "--padding": 4 + "px",
  },
};
export default ProgressBar;

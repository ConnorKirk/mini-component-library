import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const sizeLookup = {
  small: {
    "font-size": 14,
  },
  medium: {
    "font-size": 18,
  },
};

const IconInput = ({
  label,
  icon,
  width = 250,
  size = "small",
  placeholder,
}) => {
  return (
    <Wrapper
      style={{
        "--width": width + "px",
        "--font-size": sizeLookup[size]["font-size"],
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      <StyledIcon id={icon} size={sizeLookup[size]["font-size"] + "px"} />
      <StyledInput label={label} placeholder={placeholder}></StyledInput>
    </Wrapper>
  );
};

export default IconInput;

const StyledIcon = styled(Icon)`
  position: absolute;
`;
const Wrapper = styled.label`
  border-bottom: 1px solid ${COLORS.black};
  width: var(--width);
  padding-bottom: 11px;

  &:focus {
    offset: 2px;
  }
`;
const StyledInput = styled.input`
  padding-left: 24px;

  border: none;

  font-size: var(--font-size);
  font-weight: 700;
  color: ${COLORS.gray700};

  &::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }
`;

import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <NativeSelect value={value} onChange={onChange}>
        {children}
      </NativeSelect>
      <PresentationBits>
        {displayedValue}
        <StyledIcon
          id="chevron-down"
          stroke-width={1}
          size={24}
          style={{ "--size": 24 + "px" }}
        />
      </PresentationBits>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: max-content;
`;

const NativeSelect = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
`;

const PresentationBits = styled.div`
  background-color: ${COLORS.transparentGray15};
  border-radius: 8px;
  color: ${COLORS.gray700};
  padding-block: 12px;
  padding-inline: 16px 52px;
  font-size: 16px;
  font-family: "Roboto" sans-serif;
  font-weight: 400;
  :focus {
  }

  ${NativeSelect}:hover + & {
    color: ${COLORS.black};
  }

  ${NativeSelect}:focus + & {
    outline: 1px dotted #21212121;
    outline: 5px auto -webkit-focus-ring-color;
  }
`;

const StyledIcon = styled(Icon)`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 10px;
  margin: auto;
  width: var(--size);
  height: var(--size);
  pointer-events: none;

  :hover {
    color: ${COLORS.black};
  }
`;
export default Select;

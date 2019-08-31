import React from "react";
import styled from "styled-components";

const Td = styled.td`
  width: 200px;
  &.number {
    text-align: right;
  }
`;

const row = props => {
  return (
    <Td key={props.index} className={props.type}>
      {props.children}
    </Td>
  );
};

export default row;

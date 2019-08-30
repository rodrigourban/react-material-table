import React from "react";
import styled from "styled-components";

const Td = styled.td`
  width: 200px;
`;

const row = props => {
  return <Td key={props.index}>{props.children}</Td>;
};

export default row;

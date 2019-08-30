import React from "react";
import styled from "styled-components";

const Column = styled.th`
  height: 56px;
  padding: 0px 16px;
`;

const Icon = styled.i`
  vertical-align: middle;
`;

const column = props => (
  <Column key={props.key} scope="col">
    {props.sortable ? (
      <Icon className="material-icons">arrow_downward</Icon>
    ) : null}

    {props.children}
  </Column>
);

export default column;

import React from "react";
import styled from "styled-components";
import Column from "./Column/Column";

const Container = styled.tr`
  text-align: center;
`;

const columns = props => {
  const elements = props.elements.map((el, index) => (
    <Column
      key={index}
      sortable={el.sortable}
      sortMethod={console.log("Sorting")}
    >
      {el.name}
    </Column>
  ));
  return <Container>{elements}</Container>;
};

export default columns;

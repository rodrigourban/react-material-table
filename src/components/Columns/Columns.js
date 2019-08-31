import React from "react";
import styled from "styled-components";
import Column from "./Column/Column";

const Container = styled.tr`
  text-align: center;
  th:first-child {
    text-align: left;
  }
`;

const columns = props => {
  const elements = props.elements.map((el, index) => {
    if (el.name != "id" && el.name != "estado" && el.name != "creador") {
      return (
        <Column
          key={index}
          sortable={el.sortable}
          sortMethod={() => console.log("Sorting")}
          type={el.type}
        >
          {el.name}
        </Column>
      );
    }
    return null;
  });
  return <Container>{elements}</Container>;
};

export default columns;

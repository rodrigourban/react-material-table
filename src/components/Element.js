import React from "react";
import styled from "styled-components";

const Container = styled.tr`
  text-align: center;
  height: 54px;

  background-color: white;
  :hover {
    background-color: #ddd;
  }
`;

const Td = styled.td`
  width: 100px;
`;

const Element = props => {
  const fields = Object.keys(props.children);
  console.log(fields);
  return (
    <Container>
      {fields.map((el, index) => (
        <Td key={index}>{props.children[el]}</Td>
      ))}
    </Container>
  );
};

export default Element;

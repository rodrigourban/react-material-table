import React from "react";
import styled from "styled-components";
import Row from "./Row/Row";

const Container = styled.tr`
  text-align: center;
  height: 54px;
  background-color: white;
  :hover {
    background-color: #ddd;
  }
`;

const Rows = props => {
  const fields = Object.keys(props.children);
  return (
    <Container>
      {fields.map((el, index) => (
        <Row key={index}>{props.children[el]}</Row>
      ))}
    </Container>
  );
};

export default Rows;

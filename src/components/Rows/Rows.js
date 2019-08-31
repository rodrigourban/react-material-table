import React from "react";
import styled from "styled-components";
import Row from "./Row/Row";

const Container = styled.tr`
  text-align: center;
  height: 54px;
  :hover {
    background-color: #ddd;
  }
  td:first-child {
    text-align: left;
  }
`;

const Rows = props => {
  const fields = Object.keys(props.children);
  return (
    <Container>
      {fields.map((el, index) => {
        if (el !== "id" && el !== "status" && el !== "owner") {
          return (
            <Row key={index} type={typeof props.children[el]}>
              {props.children[el]}
            </Row>
          );
        }
        return null;
      })}
    </Container>
  );
};

export default Rows;

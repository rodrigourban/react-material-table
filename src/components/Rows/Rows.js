import React from "react";
import PropTypes from "prop-types";
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
  const content = props.content.map((rowKey, index) => {
    const fields = Object.keys(rowKey);
    return (
      <Container key={index}>
        {fields.map((el, index) => {
          if (el !== "id" && el !== "status" && el !== "owner") {
            return (
              <Row key={index} type={typeof rowKey[el]}>
                {rowKey[el]}
              </Row>
            );
          }
          return null;
        })}
      </Container>
    );
  });
  return <tbody>{content}</tbody>;
};

Rows.propTypes = {
  children: PropTypes.object
};

export default Rows;

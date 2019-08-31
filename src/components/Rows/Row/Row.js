import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Td = styled.td`
  width: 200px;
  &.number {
    text-align: right;
  }
`;

const row = props => {
  return <Td className={props.type}>{props.children}</Td>;
};

row.propTypes = {
  type: PropTypes.string.isRequired
};

export default row;

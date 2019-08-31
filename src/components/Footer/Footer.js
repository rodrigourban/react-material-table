import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.footer`
  align-self: flex-end;
  display: flex;
  flex-flow: columns;
  margin: 16px 0px 10px 0px;
  font-size: 0.9rem;
`;

const Element = styled.div`
  margin: 0px 16px;
  input {
    width: 10%;
  }

  button {
    outline: none;
    border: none;
    background: transparent;
    cursor: pointer;
  }
`;

const Footer = props => {
  return (
    <Container>
      <Element>
        Rows per page:{" "}
        <select id="perpage" onChange={e => props.onPageSize(e.target.value)}>
          <option value="10">10</option>
          <option value="25">25</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
      </Element>
      <Element>
        {props.pageTotal >= 0
          ? `${props.pageShowing} of ${props.pageTotal}`
          : null}
      </Element>
      <Element>
        <button onClick={props.onPreviousPage}>
          <i className="material-icons">chevron_left</i>
        </button>
        <button onClick={props.onNextPage}>
          <i className="material-icons">chevron_right</i>
        </button>
      </Element>
    </Container>
  );
};

Footer.propTypes = {
  pageShowing: PropTypes.string.isRequired,
  pageTotal: PropTypes.number.isRequired,
  onNextPage: PropTypes.func,
  onPreviosPage: PropTypes.func,
  onPageSize: PropTypes.func
};

export default Footer;

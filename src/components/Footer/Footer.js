import React from "react";
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
`;

const footer = props => (
  <Container>
    <Element>
      Rows per page:{" "}
      <select id="perpage">
        <option value="10">10</option>
        <option value="25">25</option>
        <option value="50">50</option>
        <option value="100">100</option>
      </select>
    </Element>
    <Element>1-10 of 100 </Element>
    <Element>
      <i class="material-icons">chevron_left</i>
      <i class="material-icons">chevron_right</i>
    </Element>
  </Container>
);

export default footer;

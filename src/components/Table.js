import React from "react";
import data from "../data-example";
import styled from "styled-components";
import Aux from "../hoc/AuxHoc";
import Element from "./Element";
import Search from "./Search";
import Column from "./Columns/Columns";

const Container = styled.div`
  background: whitesmoke;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  box-sizing: border-box;
  border-radius: 4px;
  overflow-x: auto;

  ::-webkit-scrollbar-track {
    background-color: inherit;
  }
  ::-webkit-scrollbar {
    width: 5px;
    background-color: #ccc;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #f5f5f5;
  }
`;

const StyledTable = styled.table`
width: 100%;
border-collapse: separate;
white-space: nowrap;

font-size: 0.9rem;
  td {
    max-width: 180px
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    padding: 0px 16px;
    font-weight: 400;
  }
`;
const StyledTitle = styled.div`
  margin: auto;
  height: 60px;
  display: flex;
  justify-content: space-between;
  background-color: #e98074;
`;

const Table = props => {
  const content = data.elements.map((el, index) => (
    <Element key={index}>{el}</Element>
  ));

  return (
    <Container>
      {/* <StyledTitle>

      </StyledTitle>
      <Container>
        <Search></Search>
      </Container> */}
      <StyledTable>
        <thead>
          <Column elements={data.columns} />
        </thead>

        <tbody>{content}</tbody>
      </StyledTable>
    </Container>
  );
};

export default Table;

import React from "react";
import data from "../data-example";
import styled from "styled-components";
import Aux from "../hoc/AuxHoc";
import Element from "./Element";
import Search from "./Search";
import Column from "./Columns/Columns";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

const Container = styled.div`
  background: whitesmoke;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  border-radius: 4px;
`;

const TableContainer = styled.div`
  overflow-x: auto;

  ::-webkit-scrollbar-track {
    background-color: inherit;
  }
  ::-webkit-scrollbar {
    width: 5px;
    background-color: inherit;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: rgba(0, 0, 0, 0.2);
  }
`;

const StyledTable = styled.table`
width: 100%;
border-collapse: collapse;
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

const Table = props => {
  const content = data.elements.map((el, index) => (
    <Element key={index}>{el}</Element>
  ));

  return (
    <Container>
      <Header>Table Header</Header>
      <TableContainer>
        <StyledTable>
          <thead>
            <Column elements={data.columns} />
          </thead>

          <tbody>{content}</tbody>
        </StyledTable>
      </TableContainer>
      <Footer />
    </Container>
  );
};

export default Table;

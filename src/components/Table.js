import React from "react";
import styled from "styled-components";
import Rows from "./Rows/Rows";
import Column from "./Columns/Columns";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import PropTypes from "prop-types";

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
  return (
    <Container>
      <Header onFilter={props.onFilter}>{props.title}</Header>
      <TableContainer>
        <StyledTable>
          <Column elements={props.columns} onSort={props.onSort} />
          <Rows content={props.data} onImageOpen={props.onImageOpen} />
        </StyledTable>
      </TableContainer>
      <Footer
        onPreviousPage={props.onPreviousPage}
        onNextPage={props.onNextPage}
        onPageSize={props.onPageSize}
        pageShowing={`${
          props.pageCurrent === 0 ? 1 : props.pageCurrent * props.pageSize
        }-${
          props.pageCurrent === 0
            ? props.data.length
            : props.data.length + props.pageCurrent * props.pageSize
        }`} //Shows in footer the quantity of elements that are currently being shown
        pageTotal={props.totalElements}
      />
    </Container>
  );
};

Table.propTypes = {
  //Validators
  title: PropTypes.string.isRequired,
  data: PropTypes.array,
  columns: PropTypes.array.isRequired,
  pageCurrent: PropTypes.number,
  pageSize: PropTypes.number,
  totalElements: PropTypes.number,
  actions: PropTypes.arrayOf(PropTypes.func),
  onSort: PropTypes.func,
  onFilter: PropTypes.func,
  onPreviousPage: PropTypes.func,
  onNextPage: PropTypes.func,
  onPageSize: PropTypes.func,
  onImageOpen: PropTypes.func
};

export default Table;

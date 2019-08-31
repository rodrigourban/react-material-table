import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import Table from "./components/Table";
import styled from "styled-components";
import data from "./data-example";

const Container = styled.main`
  box-sizing: border-box;
  height: 100vh;
  margin: 0;
  padding: 20px;
  background-color: #ccc;
  font-family: "Roboto", sans-serif;
`;

class App extends React.Component {
  sort = (column, type) => {
    //Here you should put your sorted function
    //Type: false -> DESC
    //Type: true -> ASC

    console.log(
      `Ordenando la columna ${column} de manera ${type ? "ASC" : "DESC"}`
    );
  };
  filter = payload => {
    //Here you should put your filter function
    //payload: Element to search
    console.log(`Buscando ${payload}`);
  };

  pageSize = size => {
    //Here you should control your page size
    console.log(`Changing page size to ${size}`);
  };

  changePage = num => {
    //Here you should control your pagination
    console.log(`Change to page ${num}`);
  };

  render() {
    return (
      <Container>
        <Table
          title="Example" //Table header
          data={data.elements} //Table content
          columns={data.columns} //Table columns
          totalElements={14} //Count of all the content
          pageSize={10} //Elements per page
          pageCurrent={1} //Current page
          onSort={this.sort} //Table filter method
          onFilter={this.filter} //Table search method
          onPageSize={this.pageSize} //Table size change function
          onNextPage={() => this.changePage(1 + 1)} //Pagination next page
          onPreviousPage={() => this.changePage(1 - 1)} //Pagination previous page
        />
      </Container>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

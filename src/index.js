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
const ActionContainer = styled.div`
  display: flex;
`;

const ActionButton = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 2px;
  :hover {
    cursor: pointer;
    span {
      display: block;
    }
  }
  i {
    width: 25px;
    height: 25px;
    border: none;
  }
  span {
    display: none;
    position: absolute;
    margin: -25px 0px 0px -50px;
    z-index: 2;
    background-color: black;
    color: white;
    padding: 2px;
    border-radius: 4px;
  }
`;

class App extends React.Component {
  state = {
    content: data
  };

  componentDidMount() {
    this.createActions();
  }

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

  createActions() {
    //Maps elements and adds the actions columns
    //with the icon buttons
    let _data = { ...this.state.content };
    const newContent = _data.elements.map(el => {
      const action = (
        <ActionContainer>
          <ActionButton onClick={() => console.log("here goes the callback")}>
            <span>Vender articulo</span>
            <i className="material-icons">add_shopping_cart</i>
          </ActionButton>

          <ActionButton onClick={() => console.log("here goes the callback")}>
            <span>Editar articulo</span>
            <i className="material-icons">edit</i>
          </ActionButton>

          <ActionButton onClick={() => console.log("here goes the callback")}>
            <span>Agregar stock</span>
            <i className="material-icons">note_add</i>
          </ActionButton>

          <ActionButton onClick={() => console.log("here goes the callback")}>
            <span>Detalle stock</span>
            <i className="material-icons">calendar_today</i>
          </ActionButton>

          <ActionButton onClick={() => console.log("here goes the callback")}>
            <span>Borrar articulo</span>
            <i className="material-icons">cancel</i>
          </ActionButton>
        </ActionContainer>
      );
      return { ...el, actions: action };
    });
    _data.elements = newContent;
    this.setState({ content: _data });
  }

  openImageModal = src => {
    console.log(src);
  };

  render() {
    return (
      <Container>
        <Table
          title="Example" //Table header
          data={this.state.content.elements} //Table content
          columns={this.state.content.columns} //Table columns
          totalElements={14} //Count of all the content
          pageSize={10} //Elements per page
          pageCurrent={1} //Current page
          onSort={this.sort} //Table filter method
          onFilter={this.filter} //Table search method
          onPageSize={this.pageSize} //Table size change function
          onNextPage={() => this.changePage(1 + 1)} //Pagination next page
          onPreviousPage={() => this.changePage(1 - 1)} //Pagination previous page
          onImageOpen={this.openImageModal}
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

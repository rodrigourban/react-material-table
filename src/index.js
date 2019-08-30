import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import Table from "./components/Table";
import styled from "styled-components";

const Container = styled.main`
  box-sizing: border-box;
  height: 100vh;
  margin: 0;
  padding: 20px;
  background-color: #ccc;
  font-family: "Roboto", sans-serif;
`;

class App extends React.Component {
  render() {
    return (
      <Container>
        <Table />
      </Container>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

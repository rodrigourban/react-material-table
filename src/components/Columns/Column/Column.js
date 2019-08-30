import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";

const StyledColumn = styled.th`
  height: 56px;
  padding: 0px 16px;
`;

const Icon = styled.i`
  vertical-align: middle;

  transition: all 0.5s ease-out;

  &.clicked {
    transform: rotate(180deg);
  }
`;

const Column = props => {
  const [clicked, setClicked] = useState(false);
  const columnRef = useRef();

  const handleClick = e => {
    setClicked(!clicked);
    console.log("Sorted");
  };

  const classes = clicked ? ["material-icons", "clicked"] : ["material-icons"];
  return (
    <StyledColumn
      key={props.key}
      scope="col"
      ref={columnRef}
      onClick={handleClick}
      clicked={clicked}
    >
      {props.sortable ? (
        <Icon className={classes.join(" ")}>arrow_downward</Icon>
      ) : null}

      {props.children}
    </StyledColumn>
  );
};

export default Column;

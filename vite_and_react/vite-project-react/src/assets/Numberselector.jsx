import React from "react";
import styled from "styled-components";
let Numberselector = () => {
  let array = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {array.map((value,i) => {
        <Box key={i}>{value}</Box>;
      })}
    </>
  );
};
export default Numberselector;
let Box = styled.div`
  width: 62px;
  height: 62px;
  border: 2px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
`;

import React from "react";
import styled from "styled-components"
let Totalscore=()=>{
    return(
        <Container>
        <h1>0</h1>
        <p>Total Score</p>
        </Container>
    )
}
export default Totalscore;

let Container=styled.div`
    width:100px;
    background-color:bisque;
    display: flex;
    flex-direction: column;
    line-height:1px;
    justify-content: center;
    align-items: center;
    h1{
        font-size:40px;
        font-family: Arial, Helvetica, sans-serif;
    }
    p{
        font-weight: bolder;
        font-size: 15px;
    }

`
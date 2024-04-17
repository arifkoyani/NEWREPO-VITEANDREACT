import React from "react"; 
import styled from "styled-components"
let StartGame=({toggle})=>{
    return(
        <>
        <Container>
            <div>
            <img src="/images/dices.png" />

            </div>
            <div>

                <div className="content">
                <h2>Dice Game</h2>
              <Button
              onClick={()=>{toggle()}}
              >Play Game</Button>

          </div>
            </div>
        </Container> 
        </>
    )
}

export default StartGame;
let Container=styled.div`
max-width:1180px;
display: flex;
margin:0 auto;
align-items: center;
gap:100px;
 div img{
    width: 640px;
    height: 522px;
}
.content {
    h2{
    font-size: 66px;
    white-space: nowrap;
    margin:15px 0px;
    }
}
`
let Button=styled.button`
width:150px;
height:30px;
font-family: Arial;
border:1px solid black;
font-size: 12px;
color:white;
border-radius:2px;
cursor: pointer;
background-color: black;
transition: .3s ease-in;

&:hover{
    background-color:white;
    border: 1px solid black;
    color: black;
    transition: .3 s ease-in;
}

`
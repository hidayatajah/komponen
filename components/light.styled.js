import styled from "styled-components"

export const Container = styled.div`
height: 100vh;
width: 100%;
display: flex;
justify-content: center;
color: purple;
align-items: center;
background-color: ${(prompt) => prompt.ChangeBg === false ? "black" : "yellow"};
`

export const Button = styled.div`
height: 40;
width: 30;
border-radius: 60%;

`
export const Box = styled.div`
height: 80px;
width: 80px;
border-radius: 10%;
margin-right: 1000px;
background-color: ${(prompt) => prompt.ChangeColor === false ? "grey" : "red"};
`
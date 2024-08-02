import { useState } from "react";
import { Box, Button, Container } from "./light.styled";

export default function Lampu(){
    const[lampu,HandleLamp]=useState(false);
    const SetLampu = () =>{
        HandleLamp(lampu === true ? false :true );
    }
    return(
        <>
        <Container ChangeBg={lampu}>
            <Box ChangeColor={lampu}></Box>
        <Button onClick={SetLampu}>{lampu === false ? "off" : "onn"}</Button>
        </Container>
        </>
    )
}
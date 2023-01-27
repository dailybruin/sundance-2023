import React from "react";
import styled from 'styled-components';
import Box from '../images/DescriptionBox.svg'

const Container = styled.div`
position:relative;
width:80%;
`

const TextBox = styled.div`
position:absolute;
top: 0em;
width:50%;
margin:auto;

font-family: 'Sofia Sans', sans-serif;
font-size: 32px;

display:flex;
color:red;
text-align:center;
`

const Image = styled.div`
position:relative;
`

export default function DescriptionBox(props) {
    return (
        <Container>
            <Image><img src={Box}/></Image>
            <TextBox>{props.description_box}</TextBox>
        </Container>
    )
}

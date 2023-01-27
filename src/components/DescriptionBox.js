import React from "react";
import styled from 'styled-components';
import Box from '../images/DescriptionBox.svg'

const Container = styled.div`
position:relative;
`

const TextBox = styled.div`
font-family:'Sofia Sans'
position:absolute;
color:red;
top:0em;
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

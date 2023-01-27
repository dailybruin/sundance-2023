import React from "react";
import styled from 'styled-components';
import Box from '../images/DescriptionBox.svg';
import { mediaQueries } from '../shared/config';

const Container = styled.div`
    position: relative;
    width: 100vw;
    margin: auto;
`

const TextBox = styled.div`
    position: absolute;
    top: 2em;
    width: 40%;

    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    text-align: center;

    font-family: 'Sofia Sans', sans-serif;
    font-size: 30px;
    color: black;
    text-align: center;

    ${mediaQueries.mobile} {
        width: 60vw;
        font-size: 20px;
    }
`

const Image = styled.div`
    margin: auto;

    ${mediaQueries.mobile} {
        width: 90vw;
    }
`

export default function DescriptionBox(props) {
    return (
        <Container>
            <Image><img src={Box}/></Image>
            <TextBox>{props.description_box}</TextBox>
        </Container>
    )
}

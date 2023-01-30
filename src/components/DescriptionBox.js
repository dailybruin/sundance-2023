import React from "react";
import styled from 'styled-components';
import Box from '../images/DescriptionBox.svg';
import { mediaQueries } from '../shared/config';

const Container1 = styled.div`
    position: relative;
    width: 100vw;
    margin: auto;
    height: auto;
`

const Container = styled.div`
  width: 100%;
  height: fit-content;
  position: relative;
  background-color: #EDE8E5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const TextBox = styled.div`
    position: absolute;
    top: 2em;
    width: 70%;
    max-width: 50%;

    margin-top: 3em;
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
        font-size: 18px;
    }
`

const Image = styled.img`
    width: 80%;
    margin-top: 5em;
    margin-bottom: 5em;
`

export default function DescriptionBox(props) {
    return (
        <Container>
            <Image src={Box}/>
            <TextBox>{props.description_box}</TextBox>
        </Container>
    )
}

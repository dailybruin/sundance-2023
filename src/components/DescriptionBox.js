import React from "react";
import styled from 'styled-components';
import Box from '../images/DescriptionBox.svg'

const Container = styled.div`
background-color: white;
padding:
`


export default function DescriptionBox(props) {
    return (
        <>
            <img src={Box}></img>
            <h1>{props.description_box}</h1>
        </>
    )
}

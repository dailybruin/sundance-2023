import React from 'react';
import styled from 'styled-components';
import { mediaQueries } from '../shared/config';

export default function ArticleCard(props){

    const Title = styled.div`
        position: absolute;
        left: 33.5px;
        right: 59.9px;
        top: 27.45 px;
        bottom: 73.21px;
        width: 238.59px;
        height: 142.34px;
        font-family: 'Sofia Sans';
        font-style: normal;
        font-weight: 900;
        font-size: 28px;
        line-height: 28px;
        display: flex;
        text-align: left;
        letter-spacing: -0.05em;
        color: #FFFFFF;
        opacity: 0;
    `
    const Author = styled.div`
        position: absolute;
        width: 238.59px;
        height: 142.34px;
        left: 25px;
        top: 176.91px;
        bottom: 22.37px;
        font-family: 'Sofia Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 29px;
        display: flex;
        text-align: center;
        letter-spacing: -0.05em;
        color: #FFFFFF;
        opacity:0;
    `
    const Container = styled.div`
        position: relative;
        width: 332px;
        height: 243px;
        border-radius: 10px;
        background-image: url("https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb_4x3.jpg");
        background-size: 332px;
        &:hover{
            transition: 0.3s;
            background-color: rgba(0, 0, 0, 0.7);
            background-blend-mode: multiply;
            ${Title} {
                transition: 0.3s;
                opacity:1;
            }
            ${Author} {
                transition: 0.3s;
                opacity:1;
            }
        }
    `

    return(
        <Container>
            <a href={props.article_url}>
                <Title> Title {props.article_title}</Title>
            </a>
            <Author>author{props.article_byline} </Author>
        </Container>
    )
}
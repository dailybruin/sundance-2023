import React from 'react';
import styled from 'styled-components';
import { mediaQueries } from '../shared/config';

export default function ArticleCard(props){

    const Title = styled.div`
        display: block;
        font-weight: 800;
        font-size: 28px;
        padding: 1em 1em 0.5em 1em;
        line-height: 1em;
        text-align: left;
        letter-spacing: -0.05em;
        color: white;
        opacity: 0;
    `
    const Author = styled.div`
        text-align: left;
        padding: 1em;
        font-weight: 400;
        font-size: 24px;
        letter-spacing: -0.05em;
        color: white;
        opacity: 0;
    `
    const Container = styled.div`
        /* position: relative; */
        width: 100%;
        height: 243px;
        border-radius: 10px;
        background-image: url(${props.article_image});
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        font-family: 'Sofia Sans', sans-serif;

        &:hover{
            transition: 0.3s;
            background-color: rgba(0, 0, 0, 0.7);
            background-blend-mode: multiply;
            ${Title} {
                transition: 0.3s;
                opacity: 1;
            }
            ${Author} {
                transition: 0.3s;
                opacity: 1;
            }
        }

    `

    return(
        <Container>
            <a style={{textDecoration: "none"}} href={props.article_url}>
                <Title> {props.article_title}</Title>
            </a>
            <Author> Author {props.article_byline} </Author>
        </Container>
    )
}
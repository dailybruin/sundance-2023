import React from 'react';
import styled from 'styled-components';
import { mediaQueries } from '../shared/config';

export default function ArticleCard(props){

    const Title = styled.div`
        position: absolute;
        left: 0;
        top: 0;
        padding: 1em;
        font-family: 'Sofia Sans';
        font-weight: 900;
        font-size: 28px;
        line-height: 1em;
        display: block;
        text-align: left;
        color: #FFFFFF;
        opacity: 0;
        ${mediaQueries.mobile} {
            font-size: 18px;
        }
    `
    const Author = styled.div`
        position: absolute;
        left: 0;
        bottom: 0;
        padding-left: .9em;
        padding-bottom: 1.5em;
        font-family: 'Sofia Sans';
        font-weight: 400;
        font-size: 24px;
        line-height: 1.036em;
        display: block;
        text-align: center;
        color: #FFFFFF;
        opacity: 0;
        ${mediaQueries.mobile} {
            font-size: 16px;
        }
    `
    const Container = styled.div`
        position: relative;
        width: 332px;
        height: 243px;
        border-radius: 10px;
        background-image: url(${props.article_image});
        background-size: 100%;
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
        ${mediaQueries.mobile} {
            width: 90vw;
        }
    `
    return(
        <Container>
            <a href={props.article_url}>
                <Title>{props.article_title}</Title>
            </a>
            <Author>{props.article_byline} </Author>
        </Container>
    )
}
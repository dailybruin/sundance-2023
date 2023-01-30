import React from 'react';
import styled from 'styled-components';
import { mediaQueries } from '../shared/config';

import FilmMobile from '../images/FilmMobile.svg'


export default function ArticleCard(props){

    const Container = styled.div`
        display: block;
        width: 100%;
        height: 245px;
        border-radius: 10px;
        font-family: 'Sofia Sans', sans-serif;
        text-align: left;
        box-sizing: border-box;
        position: relative;

        ${mediaQueries.mobile} {
            background-image: url(${FilmMobile});
            background-size: cover;
            background-repeat: no-repeat;
            border-radius: 0px;
            width: 100vw;
        }

    `

    const ArticleInfo = styled.div`  
        display: none;
        position: absolute;
        border-radius: 10px;
        height: 100%;
        width: 100%;
        left: 0;
        bottom: 0;

        z-index: 15;

        ${Container}:hover & {
            display: inline-block;
            background-color: rgba(0, 0, 0, 0.7);
        }

        ${mediaQueries.mobile} {
            display: inline-block;
            background-color: rgba(0, 0, 0, 0.7);
            height: 75%;
            bottom: 2em;
            border-radius: 0px;
        }
    `

    const Title = styled.a`
        display: inline-block;
        font-weight: 800;
        font-size: 28px;
        padding: 1em 1em 0.5em 1em;
        line-height: 1em;
        letter-spacing: -0.05em;
        color: white;
        text-align: left;
        text-decoration: none;
        
        ${mediaQueries.mobile} {
            font-size: 24px;
        }
    `

    const Author = styled.div`
        margin-left: 1.5em;
        font-weight: 400;
        font-size: 20px;
        letter-spacing: -0.05em;
        color: white;

        ${mediaQueries.mobile} {
            font-size: 18px;
        }
    `

    const Image = styled.img`
        display: block;
        max-width: 100%;
        height: 245px;
        margin: auto;
        box-sizing: content-box;
        object-fit: cover;
        z-index: 10;
        border-radius: 10px;

        ${mediaQueries.mobile} {
            height: 170px;
            margin: auto;
        }
    `

    const Link = styled.a`
        ${mediaQueries.mobile} {
            height: 100%;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    `
   


    return (
        <Container>
            <Link href={props.article_url}><Image src={props.article_image}/></Link>
            <ArticleInfo>
                <Title href={props.article_url}> {props.article_title}</Title>
                <Author> Author {props.article_byline} </Author>
            </ArticleInfo>
        </Container>
    )
}
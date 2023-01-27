import React from 'react';
import styled from 'styled-components';
import Film from '../images/FilmStrips.svg'
import FilmMobile from '../images/FilmMobile.svg'
import ArticleCard from './ArticleCard';
import {mediaQueries} from '../shared/config';

const { mobile } = mediaQueries;

const Container = styled.div`
    /* width: 1472px; */
    width: 100%;
    /* max-width: 100%; */
    height: 1814px;
    overflow: visible;
    background-image: url(${Film});
    background-image: no-repeat;
    background-image: cover;
    position: static;
`;

const Grid = styled.div`
    display: grid;
    width: 100%;
    grid-template-columns: repeat(4, 1fr);
    /* overflow: visible; */
    column-gap: 2em;
    row-gap: 30.875em;
    padding-top: 1.3em;
    /* position: sticky; */
`;

const FilmStrips = ({articles}) => {
    return (
        <Container >
            <Grid>  
              {articles ? articles.map((item) => {
                      return (
                          <ArticleCard
                          article_title={item.article_title}
                          article_byline={item.article_byline}
                          article_image={item.article_image}
                          article_url={item.article_url}
                          color={item.color}
                      />
                      );
                  })
              : null}
          </Grid>
        </Container>
    );
}
export default FilmStrips;


// const Grid = styled.div`
//     display: grid;
//     grid-template-columns: repeat(4, 1fr);
//     column-gap: 17.51px;
//     row-gap: 30.875em;
//     overflow: visible;
//     padding-top: 2.9375em;
//     max-width: 100%;
//     /* padding: 1em; */

//     ${mobile}{
//         display: grid;
//         background-image: url(${FilmMobile});
//         margin-top: 10px
//         margin-bottom: 10px;
//         height: auto;
//         column-gap: 10px;
//         row-gap: 90px;
//         grid-template-columns: auto;
//         grid-template-rows: fit content(100%);
//         align-items: center;
//     };
// `

// const Container = styled.div`
//     width: 100vw;
//     height: 100%;
//     background-image: url(${Film});
//     background-size: cover;
    

//     ${mobile}{
//         width: 100%;
//         height: auto;
//         background-image: none !important;
//         background-size: contain;
//     };

// `
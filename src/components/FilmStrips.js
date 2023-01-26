import React from 'react';
import styled from 'styled-components';
import Film from '../images/FilmStrips.svg'
import ArticleCard from './ArticleCard';
import { mediaQueries } from '../shared/config';

const Container = styled.div`
    width: 1472px;
    height: 1814.03px;
    background-image: url(${Film});
    background-size: contain;
`

const Grid = styled.div`
    display: grid;
    margin: auto;
    width: 100%;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 17.51px;
    row-gap: 30.875em;
    overflow: visible;
    padding-top: 2.9375em;
`

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
import React from "react";
import styled from 'styled-components';
import {mediaQueries} from "../shared/config"
//import Background from "../images/Background.svg";
import Strips from "../images/FilmStrips.svg";
import Card from "./ArticleCard";

const OuterContainer = styled.div`
    width: 1472px;
    height: 1814px;
    overflow: visible;
    background-image: url(${Strips});
    position: relative;
`;

/*const Container = styled.div`
    width = 1472px;
    position = relative;
    overflow = visible;
`;*/

const Grid = styled.div`
    display: grid;
    margin: auto;
    max-width: 100%;
    grid-template-columns: repeat(4, 1fr);
    overflow: visible;
    column-gap: 17px;
    row-gap: 30.875em;
    padding-top: 2.9374em;
    position: sticky;
    
`;

export default function FilmStrips(props){
    return(
    <>

        <OuterContainer>
            <Grid>
            {props && props.stories
                  ? props.stories.map((item) => {
                      return (
                          <Card
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
        </OuterContainer>
        
    </>
    );
}
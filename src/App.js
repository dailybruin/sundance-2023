import React, { useState, useEffect } from "react";
import styled from "styled-components";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LandingImage from "./components/LandingImage";
import FilmStrips from "./components/FilmStrips";
import gradientBackground from "./images/Desktop.svg";

import Gif from "./images/landing_gif.gif";

const Container = styled.div`
  height: fit-content;
  background-image: url(${gradientBackground});
  background-size: cover;
  background-repeat: repeat;
  /* overflow-y: scroll; */
`;

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(
      "https://kerckhoff.dailybruin.com/api/packages/flatpages/sundance-2023"
    )
      .then((res) => res.json())
      .then((res) => setData(res.data["article.aml"]));
  }, []);

  data && console.log(data);

  return (
    data && (
        <div className="App">
          <Container>
            <Header />
            <LandingImage landing_image={Gif} landing_credits={data.landing_credits}/>
            <FilmStrips articles={data.stories}/>
            <Footer />
          </Container>
        </div>
    )
  );
}

export default App;

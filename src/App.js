import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import LandingImage from './components/LandingImage';

function App() {
  const [ data, setData ] = useState(null);
  
  useEffect(() => {
		fetch("https://kerckhoff.dailybruin.com/api/packages/flatpages/sundance-2023")
		.then(res => res.json())
		.then(res => setData(res.data['article.aml']))
  }, [])

  data && console.log(data)
       
  return (
    <div className="App">
          <Header />
          <LandingImage landing_image="https://thumbs.dreamstime.com/b/cool-word-car-frost-28138481.jpg" landing_credits="Joe Bruin"/>
      Hello Daily Bruin!
          <Footer />
    </div>
  );
}

export default App;

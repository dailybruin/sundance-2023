import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import DescriptionBox from './components/DescriptionBox'

function App() {
  const [ data, setData ] = useState(null);
  
  useEffect(() => {
		fetch("https://kerckhoff.dailybruin.com/api/packages/flatpages/sundance-2023")
		.then(res => res.json())
		.then(res => setData(res.data['article.aml']))
  }, [])

  data && console.log(data)

  return data &&(
    <div className="App">
      <Header/>
      Hello Daily Bruin!
      <DescriptionBox description_box={data.description_box}/>
      <Footer/>
    </div>
  );
}

export default App;

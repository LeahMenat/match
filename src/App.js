import React, { useState } from 'react';
import './App.css';
import ItemsFounded from './components/ItemsFounded';
import ChooseItem from './components/ChooseItem';
import axios from 'axios'


function App() {

  const [currentItem, changeCurrentItem] = useState(null);

  const [results, setResults] = useState(null);
  function getRes (getRequest) {
    console.log("in getResult, req = "+getRequest)

    var data = JSON.stringify({"url":`${currentItem}`});

    var config = {
      method: 'post',
      url: `http://127.0.0.1:5000/api/getProducts/${getRequest}`,
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };
    
    axios(config)
    .then((data) => {
      console.log(data);
      setResults(data.data);
    })

  }
  let x = "background.jpg"
  
  return (
    <div className="App">
    <div id="header">
    <div id="logo">
    </div>
    </div>
      <img src={currentItem}/>
      <ChooseItem setImgSrc={changeCurrentItem} getRequest={getRes} src = {currentItem}/>
      <ItemsFounded products = {results}/>
      
    </div>
  );
}

export default App;

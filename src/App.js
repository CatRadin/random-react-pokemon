import React, { useState, useEffect } from "react";
import "./App.css";
import { BASE_URL, API_KEY } from "./constants";
import axios from "axios"
import Nav from './components/Nav'
import Card from './components/Card'

import moment from 'moment'; 

function App() {
//use states here
const [nasaData, setNasaData] = useState({});
// const [date, setDate] = useState(currentDate);
var currentDate = moment().format("YYYY-MM-DD");
console.log(currentDate, nasaData);

//call use effect to get the nasa data

useEffect(() => {
  axios.get(`${BASE_URL}?api_key=${API_KEY}`)
  .then(response => {setNasaData(response.data)})
  .catch(error => {(console.log(error))})
},[]);

  return (
    <div className="App">
      <Nav />
      <Card nasaData={nasaData} />
      {/* <Arrow /> */}
    </div>
  );
}

export default App;

import React from "react";
import Info from './Info'
import Photo from './Photo'
import "./styles.css";

export default function Card(props){
    const { nasaData } = props
    const { date } = props
    
return (
    <div className= 'card-container'>
        <Info nasaData ={nasaData} date= {date} />
        <Photo nasaData = { nasaData } date = { date } />
    </div>
)
}
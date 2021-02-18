import React from "react";
import Search from './Search'
import Title from './Title'
import "./styles.css";




export default function Nav(props){

return (
    <div className="nav-container">
        <Title />
        <Search />
    </div>
)

}
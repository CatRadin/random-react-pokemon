import React from "react";


export default function Photo(props){
    const { nasaData } = props
    
    
    return(
        <img className='pic-of-day' src={nasaData.url} alt = 'space'></img>
    )
}
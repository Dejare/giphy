import React from 'react'
import './componentStyle.css'

const Infocard = ({imgSrc, title, description}) => {
    return (
        <div className="mainInfoCard">
        <div className="infocard">
            <img src={imgSrc} />
            <h2>{title}</h2>
            <p>{description} </p>
            
        </div>
        </div>
    )
}

export default Infocard

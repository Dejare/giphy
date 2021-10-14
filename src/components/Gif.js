import React from 'react'
import './gif.css'

const Gif = ({gifImgSrc, gifTitle, copyLink, downloadLink}) => {
    return (
        <div className="gifContainer">
            <img src={gifImgSrc} alt="GIF Image" />
        <p>{gifTitle}</p>

        <div className="buttons">
            <a href={copyLink}>Copy-Link</a>
            <a href={downloadLink} download>Download</a>
        </div>
        </div>
        
    )
}

export default Gif

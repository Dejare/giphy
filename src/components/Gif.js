import React, {useRef} from 'react'
import './gif.css'

const Gif = ({gifImgSrc, gifTitle, copyLink, downloadLink}) => {
    const copyURL = () => {
        window.navigator.clipboard.writeText(copyLink)
        document.getElementById("copy").style.display = "none"
        copyFunc.current.innerText = "Copied"
    }
    const copyFunc = useRef()
    return (
        <div className="gifContainer">
            <img src={gifImgSrc} alt="GIF Image" />
        <p>{gifTitle}</p>

        <div className="buttons">
            <a onClick={copyURL} ref={copyFunc}>Copy-Link</a>
            <a href={downloadLink} download>Download</a>
            {/* <p id="copy">Copied</p> */}
        </div>
        <p className="copy">Copied</p>
        </div>
        
    )
}

export default Gif

import gsap from 'gsap/all'
import React, {useEffect, useRef} from 'react'
import './componentStyle.css'

const Buttons = ({BtnText, background, color}) => {
    const textBtn = useRef()
    useEffect(() => {
        gsap.fromTo(textBtn.current, {
            opacity: 0,
            y: 100 
        }, {
            opacity: 1,
            y: 0,
            duration: 1.5
        })
    }, [])
    return (
        <button ref={textBtn} style={{
            padding: "1rem 1.5rem", 
            border: "2px solid white",
            background: `${background}`,
            color: `${color}`
        }}>{BtnText}</button>
    )
}

export default Buttons

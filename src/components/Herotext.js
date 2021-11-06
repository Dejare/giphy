import React, {useRef, useEffect}from 'react'
import Buttons from './Buttons'
import gsap from 'gsap'
import Infocard from './Infocard'
import coin from './../images/coin.png'
import './componentStyle.css'

const Herotext = () => {
    const textOne = useRef()
    const textTwo = useRef()
    // const btnClick = useRef()
    useEffect(() => {
        gsap.fromTo(textOne.current, {
            opacity: 0,
            y: 100 
        }, {
            opacity: 1,
            y: 0,
            // duration: 1
        })
    }, [])
    useEffect(() => {
        gsap.fromTo(textTwo.current, {
            opacity: 0,
            y: 100 
        }, {
            opacity: 1,
            y: 0,
            duration: 1
        })
    }, [])
    return (
        
        <div className="page">
             <section>
        <div className="hero-text">
            <h1 ref={textOne}>Compare prices and comfort <br/> between transport companies.</h1>
            <p ref={textTwo}>This websites helps you to compare prices and honest reviews between transport companies like UBER, BOLT, TAXIFY, RIDA e.t.c <br/> Helping you  get to your location; cheaper, faster and better</p>
            <Buttons BtnText="Get Started"/>
            <Buttons BtnText="Watch How It Works &#8594;" background="white" color="black"
            />
        </div>
       
        </section>
        </div>
    )
}

export default Herotext

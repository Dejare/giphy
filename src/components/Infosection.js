import React from 'react'
import Infocard from './Infocard'
import coin from './../images/coin.png'
import chat from './../images/chat.png'
import gift from './../images/gift.png'
import './componentStyle.css'
import Footercta from './Footercta'
const Infosection = () => {
    return (
        <>
        <section>
        <div className="infoSection">
                 <Infocard imgSrc={coin} title="Save Money" description="We help you save money by comaring ride prices to your location on different riding apps and serving it to you, to pick your preferred." />
                 <Infocard imgSrc={chat} title="Get Reviews" description="Safety is top tier, so we garner honest and quality reviews from riding applications and filter it to give the best of results." />
                 <Infocard imgSrc={gift} title="Get Discounts" description="Get top information on ride app updates and features, and get discount informations, as soon as they drop!" />
                
        </div>
        <Footercta/>
        </section>
        </>
    )
}

export default Infosection

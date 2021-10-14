import React, {useState, useEffect} from 'react'
import './App.css'
import Gif from './components/Gif'
import axios from 'axios'

const Mainpage = () => {

    // APIII
    const [mainGif, setmainGif] = useState([])
    const [search, Setsearch] = useState('')

    useEffect(()=> {
        axios.get("https://api.giphy.com/v1/gifs/trending?api_key=nKEFKPSILLeIlqLEjqhVsRO8ShxIjfcn&limit=25&rating=g")
        .then(res=> {
            console.log(res.data.data)
            setmainGif(res.data.data)
        })
    }, [])

    const handleChange = e => {
        Setsearch(e.target.value)
    }

    const filteredResult = mainGif.filter(oneGif=>oneGif.title.toLowerCase().includes(search.toLowerCase()))
    return (
        <div>
             <header className="bg-blue-600">
            <div className="logo">
                <label htmlFor="logo">DejareX</label>
            </div>
        </header>
        <div className="heroSection mx-auto">
            <h1>GIF Collections at it's peak</h1>
            <p>Simply enter your search terms, and get loads of related GIFs</p>
        <form >
        <input type="text" placeholder="Search For A GIF"  onChange={handleChange} />
        </form>
        </div>
        <div className="mainGifBox">
        {filteredResult.map(singleGif=>{
            return(
                
                <Gif key = {singleGif.id}
                gifImgSrc ={singleGif.images.original.webp}
                gifTitle={singleGif.title}
                copyLink={singleGif.images.original.url}
                />
               
            )
        })}
         </div>
        </div>
    )
}

export default Mainpage

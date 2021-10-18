import React, {useState, useEffect} from 'react'
import './App.css'
import Gif from './components/Gif'
import axios from 'axios'
import './components/gif.css'
import Loader from './components/Loader'


const Mainpage = () => {

    // APIII
    const [mainGif, setmainGif] = useState([])
    const [search, Setsearch] = useState('')
    const [Loading, setLoading] = useState(false)

    const handleChange = e => {
        Setsearch(e.target.value)
    }
    const handleQuery = (e) => {
        
        e.preventDefault()
        // setLoading(true)

        axios.get(`https://api.giphy.com/v1/gifs/search?api_key=nKEFKPSILLeIlqLEjqhVsRO8ShxIjfcn&q=${search}&limit=25&offset=0&rating=g&lang=en
        `)
        .then(res=> {
            console.log(res.data.data)
            setLoading(true)
            setmainGif(res.data.data)
        })
    }
        
    


    // useEffect(()=> {
        
    // }, [])


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
        <form onSubmit={handleQuery}>
        <input type="text" placeholder="Search For A GIF"  onChange={handleChange} />
        </form>
        </div>
        <div className="mainGifBox">
        {Loading ? mainGif.map(singleGif=>{
            return(
                
                <Gif key = {singleGif.id}
                gifImgSrc ={singleGif.images.original.webp}
                gifTitle={singleGif.title}
                copyLink={singleGif.images.original.url}
                downloadLink = {singleGif.url}
                /> 
            )
        }): <Loader />}
         </div>
        </div>
    )
}

export default Mainpage

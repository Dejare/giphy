import React from 'react'

const Searchgif = () => {
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

    return (
        <div>
            
        </div>
    )
}

export default Searchgif

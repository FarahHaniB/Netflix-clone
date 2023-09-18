import axios from 'axios'
import React, { useEffect, useState } from 'react'
import requests from './Requests'

const Main = () => {
    const [movies, setMovies] = useState([])

    const randomMovie = movies[Math.floor(Math.random() * movies.length)]

    useEffect(() => {
        axios.get(requests.requestPopular).then((response) => {
            setMovies(response.data.results)
        })
    },[])
    console.log(randomMovie);

  return (
    <div className='w-full h-[550px] text-white'>
        <div className='w-full h-full'>
            <div className='absolute w-full h-[550px] bg-gradient-to-r from-black'></div>
            <img className='w-full h-full object-cover' src={`https://image.tmdb.org/t/p/original/${randomMovie?.backdrop_path}`} alt={randomMovie?.title}/>
        </div>
    </div>
  )
}

export default Main

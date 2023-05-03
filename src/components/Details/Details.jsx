import React from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { Helmet } from "react-helmet";

export default function Details() {

  let [details, setDetails] = useState({})

  // params : it returns ( id , mediaType ) which i gave in the path and Link
  let params = useParams();
  console.log(params)

  
  useEffect(() => {
    getItemDetails()
  }, [])
  
  
  let getItemDetails = async() => {
    
    let { data } = await axios.get(`https://api.themoviedb.org/3/${params.mediaType}/${params.id}?api_key=ef9cbb095683ede3f079dfec263c76ed`)
    console.log(data)
    setDetails(data)
  }
  
  return (
    <>
      <div className='row py-5'>
        <div className="col-md-3">
          {/* 3lshan ana 3andi moshkela en el Person , wa5ed attribute called ( profile_path) w el movies pics wa5da
        (poster_path) , fa kda 2oltlo lw hya b person , rou7 lel path el folani , else , rou7 lel poster */}
          {params.mediaType == 'person' ?
            <img className='w-100' src={`https://image.tmdb.org/t/p/original${details.profile_path}`} alt="" />
            :
            <img className='w-100' src={`https://image.tmdb.org/t/p/original${details.poster_path}`} alt="" />
          }
        </div>
        <div className='col-md-9'>
          {/* hena b2olo lw l2et da ok , lw l2et da tmam  */}
          <h2>{details.name}{details.title}</h2>
          <p>{details.overview}{details.biography }</p>
        </div>
      </div>
      {/* <div className="application">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Details</title>
        </Helmet>
      </div> */}
    </>
  )
}

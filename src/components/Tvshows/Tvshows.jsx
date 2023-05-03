import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Tvshows.module.scss';

export default function Tvshows() {
  let [tvShows, setTvShows] = useState([]);

  useEffect(() => {
    getTrendingItems();
  }, [])

  let getTrendingItems = async () => {
    let { data } = await axios.get
      ("https://api.themoviedb.org/3/trending/tv/week?api_key=ef9cbb095683ede3f079dfec263c76ed")
    setTvShows(data.results)
    console.log(data)

  }
  return (
    <>
      <div className='row'>
        <div className="col-md-4">
          <div className='left-paraghraph py-5'>
            <div className={`${styles.brdr} w-25 mb-2`}></div>
            <h3>Trending</h3>
            <h3>Tv Shows</h3>
            <h3>To Watch Now </h3>
            <span>most watched Tv shows </span>
            <div className={`${styles.brdr} w-100 mt-2`}></div>
          </div>
        </div>
        {tvShows && tvShows.length > 0 ? tvShows.splice(0, 10).map((item, index) =>
          // hena 3mlt splice 3lshan yegbli 3adad el movies el 3ayz a3mlha view
          <div key={index} className='col-md-2 text-center py-3'>
            <Link to={`/details/${item.id}/${item.media_type}`} className='nav-link'>
            <div className='item position-relative'>
              <img src={'https://image.tmdb.org/t/p/original' + item.poster_path} className='w-100' alt="" />
              <h2 className='h6'>{item.name}</h2>
              <span className='position-absolute top-0 end-0 p-2 bg-info text-white'>{item.vote_average.toFixed(1)}</span>
              {/* toFixed() : bt3ml Apporximation lel Number , Decimals  */}
              </div>
              </Link>
          </div>
        ) : <i className='fas fa-spinner fa-spin fa-4x text-center'></i>}


      </div>
        
      {/* <div className="application">
        <Helmet>
          <meta charSet="utf-8" />
          <title>TvShows</title>
        </Helmet>
      </div> */}
    </>
  )
}

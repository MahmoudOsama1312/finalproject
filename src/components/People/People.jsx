import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './People.module.scss';

export default function People() {
  let [people, setPeople] = useState([]);

  useEffect(() => {
    getTrendingItems();
  }, [])

  let getTrendingItems = async () => {
    let { data } = await axios.get
      ("https://api.themoviedb.org/3/trending/person/week?api_key=ef9cbb095683ede3f079dfec263c76ed")
    setPeople(data.results)
    console.log(data)

  }
  return (
    <>
      <div className='row'>
        <div className="col-md-4">
          <div className='left-paraghraph py-5'>
            <div className={`${styles.brdr} w-25 mb-2`}></div>
            <h3>Trending</h3>
            <h3>Persons</h3>
            <h3>To Watch Now </h3>
            <span>most watched Persons </span>
            <div className={`${styles.brdr} w-100 mt-2`}></div>
          </div>
        </div>
        {people && people.length > 0  ? people.splice(0, 10).map((item, index) =>
          // hena 3mlt splice 3lshan yegbli 3adad el movies el 3ayz a3mlha view
          <div key={index} className='col-md-2 text-center py-3'>
            <Link to={`/details/${item.id}/${item.media_type}`} className='nav-link'>
            <div className='item position-relative'>
              <img src={'https://image.tmdb.org/t/p/original' + item.profile_path} className='w-100' alt="" />
              <h2 className='h6'>{item.name}</h2>
            </div>
            </Link>
          </div>
        ) : (people.length != 0 ? <i className='fas fa-spinner fa-spin fa-4x text-center'></i>:<p className='nav-link'>no data</p>)}


      </div>
      {/* <div className="application">
        <Helmet>
          <meta charSet="utf-8" />
          <title>People</title>
        </Helmet>
      </div>     */}
    </>
  )
}

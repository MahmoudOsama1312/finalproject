import React from 'react';
import Movies from '../Movies/Movies';
import People from '../People/People';
import TvShows from '../Tvshows/Tvshows';

export default function Home() {
  return (
    <>
      <Movies />
      <TvShows />
      <People />

      {/* <Helmet>
        <meta charSet="utf-8" />
        <title>Home</title>
      </Helmet> */}
      
    </>
  )
}

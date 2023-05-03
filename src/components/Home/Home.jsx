import React from 'react';
import axios from 'axios';
import { useEffect ,useState } from 'react';
import styles from './Home.module.scss';
import Movies from '../Movies/Movies';
import People from '../People/People';
import TvShows from '../Tvshows/Tvshows';
import { Helmet } from "react-helmet";

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

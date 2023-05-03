import axios from 'axios';
import { createContext, useEffect, useState } from "react";

export let MediaContext = createContext(0);
//------------------------------------------------------------------

export default function MediaContextProvider(props){
    // variable of Movies 
    let [movies, setMovies] = useState(undefined);
    // Variable of Tv
    let [trendingTv, setTrendingTv] = useState([]);
    // Variable of People
    let [trendingPeople, setTrendingPeople] = useState([]);

    let getTrendingItems = async (mediaType, callback) => {
        let { data } = await axios.get
            (`https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=ef9cbb095683ede3f079dfec263c76ed`)
        callback(data.results)
        console.log('check re call')

    }

    useEffect(() => {
        getTrendingItems('movie', setMovies);
        getTrendingItems('tv', setTrendingTv)
        getTrendingItems('person', setTrendingPeople)
    }, [])
    // hena b3d ma 3mlt Fill lel Data gwa el useState , babda2 a3mlha Share . 3lshan ay 7ad yest5dm el hwa 3yzo
    return <MediaContext.Provider value={{ movies, trendingTv, trendingPeople }}>
        {props.children}

    </MediaContext.Provider>
}
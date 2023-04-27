import axios from "axios";

export const getGenreList = ()=> async(dispatch)=>{
    console.log(process.env.REACT_APP_API_KEY + ' api key');
      const { data } = await axios.get(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );
    dispatch({type:"getGenreListSuccess", payload:data.genres});
    // dispatch({type:"setNumOfPagesSuccess", payload:data.total_pages});
}

export const setSelectedGenre = (genre)=> async(dispatch)=>{
    dispatch({type:"setSelectedGenreSuccess", payload:genre})
    dispatch({type:"emptyPageState"});
}

export const setMovieList = (genreId, page)=> async(dispatch)=>{
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&sort_by=popularity.desc&with_genres=${genreId}&with_original_language=hi&page=${page}`
    );
    dispatch({type:'setMovieListSucess', payload:data});
}

export const setMovieDetail = (id)=> async(dispatch)=>{
   const { data } = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}`
    );
    
    dispatch({type:'setMovieDetailSuccess', payload:data});
}

export const setCastAndCrew = (id)=> async(dispatch)=>{
   const { data } = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}/casts?api_key=${process.env.REACT_APP_API_KEY}`
    );

    dispatch({type:'setCastAndCrewSucess', payload:data});
}

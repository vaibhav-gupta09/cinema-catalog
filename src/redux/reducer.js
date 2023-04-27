import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  genreList:[], 
  selectedGenre:'', 
  movies:[], 
  page:1, 
  numOfPages:1,
  movieDetail:{},
  cast: [],
  crew: []
}
export const movieReducer = createReducer(initialState, {
  getGenreListSuccess: (state, action)=>{
    state.genreList = action.payload;
  },
  setSelectedGenreSuccess:(state, action)=>{
    state.selectedGenre = action.payload;
  },
  setMovieListSucess: (state, action)=>{
    state.movies = action.payload.results;
    state.numOfPages = action.payload.total_pages;
  },
  setMovieDetailSuccess: (state, action)=>{
    state.movieDetail = action.payload;
  },
  setCastAndCrewSucess: (state, action)=>{
    state.cast = action.payload.cast;
    state.crew = action.payload.crew;
  },
  increasePageCount:(state)=>{
    state.page += 1;
  },
  decreasePageCount:(state)=>{
    state.page -= 1;
  },
  emptyPageState: (state)=>{
    state.page = 1;
  },
  setToInitialState: (state)=>{
  state.selectedGenre=''; 
  state.movies=[]; 
  state.page= 1; 
  state.numOfPages= 1;
  state.movieDetail = {};
  state.cast = [];
  state.crew =  [];
  }
})
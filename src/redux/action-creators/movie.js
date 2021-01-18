import {CHOSE_MOVIE_FROM_DROPDOWN, SET_IS_VISIBLE, SET_MOVIES_DATA} from "../action-types";


export const choseMovieFromDropdown = (movie) => ({type: CHOSE_MOVIE_FROM_DROPDOWN, payload: movie})
export const setMoviesData = (moviesData) => ({type: SET_MOVIES_DATA, payload: moviesData})
export const setIsVisible = (value) => ({type: SET_IS_VISIBLE, payload: value})

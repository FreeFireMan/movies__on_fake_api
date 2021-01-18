import {combineReducers} from "redux";
import {moviesReducer} from "./movies";

export const reducer = combineReducers({
  movies: moviesReducer
})

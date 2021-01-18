import {CHOSE_MOVIE_FROM_DROPDOWN, SET_IS_VISIBLE, SET_MOVIES_DATA} from "../action-types";

const initialState = {chosenMovie: null, moviesData: null, isVisible: null}

export const moviesReducer = (state = initialState, action) => {
  const {type, payload} = action

  switch (type) {

    case CHOSE_MOVIE_FROM_DROPDOWN: {
      return {...state, chosenMovie: payload}
    }

    case SET_IS_VISIBLE: {
      return {...state, isVisible: payload}
    }

    case SET_MOVIES_DATA: {
      return {...state, moviesData: payload}
    }

    default: {
      return state
    }
  }
}

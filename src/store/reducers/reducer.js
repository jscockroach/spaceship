import * as actionTypes from "../actions";
import { initialState } from "./initialState";

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SAVE_ALL_STARSHIPS_SUCCESS:
      return Object.assign({}, state, {
        allStarships: action.allStarships
      });
    default:
      return state;
  }
};

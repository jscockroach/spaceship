export const GET_DATA = "GET_DATA";
export const SAVE_ALL_STARSHIPS_SUCCESS = "SAVE_ALL_STARSHIPS_SUCCESS";

export const getData = () => {
  return { type: GET_DATA };
};

export const saveAllStarshipsSuccess = allStarships => {
  return { type: SAVE_ALL_STARSHIPS_SUCCESS, allStarships };
};

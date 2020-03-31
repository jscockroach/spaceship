export const GET_DATA = "GET_DATA";
export const SAVE_ALL_STARSHIPS_SUCCESS = "SAVE_ALL_STARSHIPS_SUCCESS";
export const GET_DATA_BY_ONE_SHIP = "GET_DATA_BY_ONE_SHIP";
export const SAVE_DATA_BY_ONE_SHIP_SUCCESS = "SAVE_DATA_BY_ONE_SHIP_SUCCESS";
export const GET_DATA_BY_SEARCH_QUERY = "GET_DATA_BY_SEARCH_QUERY";

export const getData = url => {
  return { type: GET_DATA, url };
};

export const getDataByOneShip = url => {
  return { type: GET_DATA_BY_ONE_SHIP, url };
};
export const saveDataByOneShipSuccess = ship => {
  return { type: SAVE_DATA_BY_ONE_SHIP_SUCCESS, ship };
};

export const getDataBySearchQuery = query => {
  return { type: GET_DATA_BY_SEARCH_QUERY, query };
};

export const saveAllStarshipsSuccess = allStarships => {
  return { type: SAVE_ALL_STARSHIPS_SUCCESS, allStarships };
};

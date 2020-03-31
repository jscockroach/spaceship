import { takeLatest, put, call } from "redux-saga/effects";
import * as services from "./services";
import {
  GET_DATA,
  GET_DATA_BY_SEARCH_QUERY,
  GET_DATA_BY_ONE_SHIP,
  saveAllStarshipsSuccess,
  saveDataByOneShipSuccess
} from "./actions";

export function* getShipsData(action) {
  try {
    const allStarships = yield call(services.getData, action.url);
    yield put(saveAllStarshipsSuccess(allStarships));
  } catch (err) {
    console.log("Error getData:", err);
  }
}

export function* getDataBySearchQuery(action) {
  try {
    const searchStarships = yield call(services.getData, action.query);
    yield put(saveAllStarshipsSuccess(searchStarships));
  } catch (err) {
    console.log("Error getDataBySearchQuery:", err);
  }
}

export function* getDataByOneShip(action) {
  try {
    const ship = yield call(services.getData, action.url);
    yield put(saveDataByOneShipSuccess(ship));
  } catch (err) {
    console.log("Error getDataByOneShip:", err);
  }
}

function* appSaga() {
  yield takeLatest(GET_DATA, getShipsData);
  yield takeLatest(GET_DATA_BY_SEARCH_QUERY, getDataBySearchQuery);
  yield takeLatest(GET_DATA_BY_ONE_SHIP, getDataByOneShip);
}

export default appSaga;

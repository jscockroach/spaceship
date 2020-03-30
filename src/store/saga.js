import { takeLatest, put, call } from "redux-saga/effects";
import * as services from "./services";
import { GET_DATA, saveAllStarshipsSuccess } from "./actions";

export function* getShipsData() {
  try {
    const allStarships = yield call(services.getData, "/starships");
    yield put(saveAllStarshipsSuccess(allStarships));
  } catch (err) {
    console.log("Error getData:", err);
  }
}

function* appSaga() {
  yield takeLatest(GET_DATA, getShipsData);
}

export default appSaga;

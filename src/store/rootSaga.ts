import { all, fork } from "redux-saga/effects";

import postsSaga from "../pages/Blog/saga";

export function* rootSaga() {
    yield all([fork(postsSaga)]);
}
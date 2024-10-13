import { all, call, put, takeLatest } from "redux-saga/effects";

import { getPostsFailure, getPostsRequest, getPostsSuccess } from "./slice";

import { IPostsResponse } from "./types";
import axios, { AxiosResponse } from "axios";
import {postsUrl} from "./api";

function* getPostsSaga(action: ReturnType<typeof getPostsRequest>) {

    try {
        const response: AxiosResponse<IPostsResponse> = yield call(
            axios.get,
            postsUrl()
        );
        yield put(
            getPostsSuccess({
                posts: response.data,
            })
        );
    } catch (e: any) {
        yield put(
            getPostsFailure({
                error: e,
            })
        );
    }
}

function* postsSaga() {
    yield all([takeLatest(getPostsRequest, getPostsSaga)]);
}

export default postsSaga;
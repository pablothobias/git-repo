import { put, takeLatest, call } from "redux-saga/effects";
import { REQUEST_GITHUB_USER } from "../../model/actions";
import { succesRequestFromGithub, failureRequestFromGithub} from '../action';
import fetchUserFromGithub from "../../api";

export default function* fetchGithubRepositoryWatcher() {
    yield takeLatest(REQUEST_GITHUB_USER, sagaFecthRequestHandler);
};

function* sagaFecthRequestHandler(action) {

    try {
        const apiResponse = yield call(fetchUserFromGithub, action.payload);
        yield put(succesRequestFromGithub(apiResponse));
    } catch (error) {
        yield put(failureRequestFromGithub());
    }
};
import { put, takeLatest, call } from "redux-saga/effects";
import { REQUEST_GITHUB_USER } from "../../model/actions";
import { succesRequestFromGithub, failureRequestFromGithub, loadingRequestFromGithub} from '../action';
import fetchUserFromGithub from "../../api/api";

export default function* fetchGithubRepositoryWatcher() {
    yield takeLatest(REQUEST_GITHUB_USER, sagaFecthRequestHandler);
};

function* sagaFecthRequestHandler(action) {

    try {
        yield put(loadingRequestFromGithub());
        const user = yield call(fetchUserFromGithub, action.payload);
        yield put(succesRequestFromGithub(user));
    } catch (error) {
        yield put(failureRequestFromGithub());
    }
};
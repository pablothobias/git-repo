import { fork } from "redux-saga/effects";
import fetchGithubRepositoryWatcher from "./githubSaga";;

export default function* root() {
    yield fork(fetchGithubRepositoryWatcher);
}
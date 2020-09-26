import { ActionTypes,  SUCCESS_FETCH_REQUEST, REQUEST_GITHUB_USER, FAILURE_FETCH_REQUEST, LOADING_FETCH_REQUEST } from "../model/actions";
import { User } from "../model/user";

const requestGithubUser = (username: string): ActionTypes => {

    return {
        type: REQUEST_GITHUB_USER,
        payload: username
    }
};

const succesRequestFromGithub = (user: User): ActionTypes => {

    return {
        type: SUCCESS_FETCH_REQUEST,
        payload: user
    }
};

const failureRequestFromGithub = (): ActionTypes => {

    return {
        type: FAILURE_FETCH_REQUEST,
    }
};

const loadingRequestFromGithub = (): ActionTypes => {

    return {
        type: LOADING_FETCH_REQUEST,
    }
};

export { requestGithubUser, succesRequestFromGithub, failureRequestFromGithub, loadingRequestFromGithub };
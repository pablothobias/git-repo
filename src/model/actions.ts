import { User } from "./user";

export const REQUEST_GITHUB_USER = 'REQUEST_GITHUB_USER'
export const SUCCESS_FETCH_REQUEST = 'SUCCESS_FETCH_REQUEST'
export const FAILURE_FETCH_REQUEST = 'FAILURE_FETCH_REQUEST'

interface RequestGithubUser {
    type: typeof REQUEST_GITHUB_USER,
    payload: string
}

interface SuccessRequestGithubUser {
    type: typeof SUCCESS_FETCH_REQUEST,
    payload: User
}

interface FailureRequestGithubUser {
    type: typeof FAILURE_FETCH_REQUEST
}

export type ActionTypes =  RequestGithubUser | SuccessRequestGithubUser | FailureRequestGithubUser;
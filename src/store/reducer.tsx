import { FAILURE_FETCH_REQUEST, ActionTypes, REQUEST_GITHUB_USER, SUCCESS_FETCH_REQUEST, LOADING_FETCH_REQUEST } from "../model/actions";
import { GITHUB_STATE } from "../model/store-state";

const intialState: GITHUB_STATE = {
    user: null,
    loading: false, 
    error: false
};

const externalApiFecth = (state: GITHUB_STATE = intialState, action: ActionTypes): GITHUB_STATE => {
    switch (action.type) {
        case REQUEST_GITHUB_USER:
            return { ...state, loading: false, error: false };
        case SUCCESS_FETCH_REQUEST:
            return { ...state, user: action.payload, loading: false, error: false };
        case FAILURE_FETCH_REQUEST:
            return { ...state, loading: false, error: true };
        case LOADING_FETCH_REQUEST:
            return { ...state, loading: true, error: false };
        default:
            return state;
    }
};

export default externalApiFecth;
import { FAILURE_FETCH_REQUEST, ActionTypes, REQUEST_GITHUB_USER, SUCCESS_FETCH_REQUEST } from "../model/actions";
import { GITHUB_STATE } from "../model/store-state";

const intialState: GITHUB_STATE = {
    data: {},
    loading: false,
    error: false
};

const externalApiFecth = (state: GITHUB_STATE = intialState, action: ActionTypes) => {
    switch (action.type) {
        case REQUEST_GITHUB_USER:
            return { ...state, data: {}, loading: true, }
        case SUCCESS_FETCH_REQUEST:
            return { ...state, data: action.payload, loading: false, error: false, }
        case FAILURE_FETCH_REQUEST:
            return { ...state, data: {}, loading: false, error: true, }
        default:
            return state;
    }
};

export default externalApiFecth;
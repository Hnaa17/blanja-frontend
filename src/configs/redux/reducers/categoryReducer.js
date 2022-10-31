import { ActionTypes } from "../constants/action-types";
const initialState = {
    category: [],
    isLoading: false,
};
export const categoryReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.GET_CATEGORY_SUCCESS:
            return {
                ...state,
                category: payload
            };
        default:
            return state;
    }
};
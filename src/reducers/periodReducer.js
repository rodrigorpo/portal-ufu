import { CLICK_UPDATE_VALUE } from '../actions';

const initialState = {
    newValue: 'teste'
};
export const periodReducer = (state = initialState, action) => {
    switch (action.type) {
        case CLICK_UPDATE_VALUE:
            return {
                ...state,
                newValue: action.newValue
            };
        default:
            return state;
    }
};
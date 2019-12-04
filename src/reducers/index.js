import { disciplinesReducer } from './disciplineReducer'
import { combineReducers } from 'redux';

export const Reducers = combineReducers({
    disciplineState: disciplinesReducer
});
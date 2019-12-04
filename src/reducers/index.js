import { periodReducer } from './periodReducer';
import { scheduleReducer } from './scheduleReducer';
import { combineReducers } from 'redux';

export const Reducers = combineReducers({
    periodState: periodReducer,
    scheduleState: scheduleReducer
});
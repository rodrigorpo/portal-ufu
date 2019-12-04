import {
    ADD_DISCIPLINE,
    REMOVE_DISCIPLINE_FROM_SCHEDULE,
    REMOVE_DISCIPLINE_FROM_DISCIPLINE
} from '../actions/types';

export const addDiscipline = value => ({
    type: ADD_DISCIPLINE,
    newValue: value
});

export const removeDisciplineFromSchedule = (discipline) => ({
    type: REMOVE_DISCIPLINE_FROM_SCHEDULE,
    disciplineToRemove: discipline
});

export const removeDisciplineFromDiscipline = value => ({
    type: REMOVE_DISCIPLINE_FROM_DISCIPLINE,
    disciplineToRemove: value
});
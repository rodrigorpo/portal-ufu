import {
    ADD_DISCIPLINE,
    REMOVE_DISCIPLINE
} from '../actions/types';

export const addDiscipline = discipline => ({
    type: ADD_DISCIPLINE,
    discipline: discipline
});

export const removeDisciplines = (discipline) => ({
    type: REMOVE_DISCIPLINE,
    disciplineToRemove: discipline
});
import {
    ADD_DISCIPLINE,
    REMOVE_DISCIPLINE,
    ORDER_CONFLICT
} from '../actions/types';

export const addDiscipline = discipline => ({
    type: ADD_DISCIPLINE,
    discipline: discipline
});

export const removeDisciplines = (discipline) => ({
    type: REMOVE_DISCIPLINE,
    disciplineToRemove: discipline
});

export const orderConflicts = (conflictDisciplines) => ({
    type: ORDER_CONFLICT,
    conflictDisciplines: conflictDisciplines
});
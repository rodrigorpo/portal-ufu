import {
    ADD_DISCIPLINE, REMOVE_DISCIPLINE_FROM_SCHEDULE
} from '../actions/types';

const untreatedInitialState = {
    schedule: {
        days: ['SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SAB'],
        amTime: [
            { rowHour: '7:10', disciplines: ['ABC', 'ABC', 'EXP-CE1', 'ABC', 'ABC', 'ABC'] },
            { rowHour: '8:00', disciplines: ['ABC', '', '', '', '', ''] },
            { rowHour: '8:50', disciplines: ['', '', 'POO', '', '', ''] },
            { rowHour: '9:40', disciplines: ['', '', '', '', '', ''] },
            { rowHour: '10:40', disciplines: ['', '', '', 'ED', '', ''] },
            { rowHour: '11:30', disciplines: ['', '', '', 'ED', 'POO | ED', ''] },
            { rowHour: '12:20', disciplines: ['', '', '', '', 'ABC', ''] },
        ],
        pmTime: [
            { rowHour: '13:10', disciplines: ['', '', '', '', 'ABC', ''] },
            { rowHour: '14:00', disciplines: ['', '', '', '', '', ''] },
            { rowHour: '14:50', disciplines: ['', '', '', '', '', ''] },
            { rowHour: '15:40', disciplines: ['', '', '', '', '', ''] },
            { rowHour: '16:50', disciplines: ['', '', '', '', '', ''] },
            { rowHour: '17:40', disciplines: ['', '', '', '', '', ''] },
            { rowHour: '18:30', disciplines: ['', '', '', '', '', ''] },
        ],
    }
}

const initialState = getFromSessionStorage('disciplinesState') || setInitialSessionStorage()

function getFromSessionStorage(name) {
    window.sessionStorage.getItem(name)
}

function setSessionStorage(name, object) {
    window.sessionStorage.setItem(name, JSON.stringify(object))
}

function setInitialSessionStorage() {
    setSessionStorage('disciplinesState', untreatedInitialState)
    return untreatedInitialState;
}

function handleRemoveDisciplineSchedule(actualState, discipline) {
    let newState = { ...actualState.schedule }
    newState.amTime = newState.amTime.map(amTimeObj => {
        return { rowHour: amTimeObj.rowHour, disciplines: mapDisciplines(amTimeObj, discipline) }
    })
    newState.pmTime = newState.pmTime.map(pmTimeObj => {
        return { rowHour: pmTimeObj.rowHour, disciplines: mapDisciplines(pmTimeObj, discipline) }
    })

    return newState;
}

function mapDisciplines(amTimeObj, discipline) {
    return amTimeObj.disciplines.map(objDiscipline => {
        if (!discipline.includes('|') && objDiscipline === discipline) {
            return ''
        }
        return objDiscipline
    })
}

export const disciplinesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_DISCIPLINE:
            return {
                ...action.disciplineToRemove
            };
        case REMOVE_DISCIPLINE_FROM_SCHEDULE:
            //TODO: Disparar para o lado das disciplinas
            const newState = {
                ...state,
                schedule: handleRemoveDisciplineSchedule(state, action.disciplineToRemove)
            }
            setSessionStorage('disciplinesState', newState);
            return newState
        default:
            return state;
    }
};
import {
    ADD_DISCIPLINE, REMOVE_DISCIPLINE
} from '../actions/types';

const untreatedInitialState = {
    schedule: {
        days: ['SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SAB'],
        amTime: [
            { rowHour: '7:10', disciplines: ['', '', '', '', '', ''] },
            { rowHour: '8:00', disciplines: ['', '', '', '', '', ''] },
            { rowHour: '8:50', disciplines: ['', '', '', '', '', ''] },
            { rowHour: '9:40', disciplines: ['', '', '', '', '', ''] },
            { rowHour: '10:40', disciplines: ['', '', '', '', '', ''] },
            { rowHour: '11:30', disciplines: ['', '', '', '', '', ''] },
            { rowHour: '12:20', disciplines: ['', '', '', '', '', ''] },
        ],
        pmTime: [
            { rowHour: '13:10', disciplines: ['', '', '', '', '', ''] },
            { rowHour: '14:00', disciplines: ['', '', '', '', '', ''] },
            { rowHour: '14:50', disciplines: ['', '', '', '', '', ''] },
            { rowHour: '15:40', disciplines: ['', '', '', '', '', ''] },
            { rowHour: '16:50', disciplines: ['', '', '', '', '', ''] },
            { rowHour: '17:40', disciplines: ['', '', '', '', '', ''] },
            { rowHour: '18:30', disciplines: ['', '', '', '', '', ''] },
        ],
    },
    period: [
        {
            name: '3º Período',
            chainDisciplines: [
                {
                    id: '1',
                    disciplines: [
                        {
                            active: '', name: 'MM',
                            schedule: ['Seg 8:50 - 10:40', 'Ter 8:50 - 10:40'],
                        },
                    ],
                },
                {
                    id: '2',
                    disciplines: [
                        {
                            active: '', name: 'CE1',
                            schedule: ['Seg 8:50 - 10:40', 'Ter 8:50 - 10:40'],
                        },
                        { active: '', name: 'EXP-CE1', schedule: ['Ter 13:10 - 14:50'] },
                    ],
                },
                {
                    id: '3',
                    disciplines: [
                        {
                            active: '', name: 'CTM',
                            schedule: ['Seg 7:10 - 8:50', 'Sex 7:10 - 8:50'],
                        },
                        { active: '', name: 'EXP-CTM', schedule: ['Ter 13:10 - 14:50'] },
                    ],
                },
                {
                    id: '4',
                    disciplines: [
                        {
                            active: '', name: 'ESOF',
                            schedule: ['Ter 7:10 - 8:50', 'Qua 8:50 - 10:40'],
                        },
                    ],
                },
                {
                    id: '5',
                    disciplines: [
                        {
                            active: '', name: 'F3',
                            schedule: ['Qua 14:50 - 16:50', 'Qui 14:50 - 16:50'],
                        },
                        { active: '', name: 'EXP-F3', schedule: ['Qua 13:10 - 14:50'] },
                    ],
                },
                {
                    id: '6',
                    disciplines: [
                        {
                            active: '', name: 'SISII',
                            schedule: ['Ter 16:50 - 18:30', 'Qui 16:50 - 18:30'],
                        },
                    ],
                },
            ],
        },
        {
            name: '4º Período',
            chainDisciplines: [
                {
                    id: '1',
                    disciplines: [
                        {
                            active: '', name: 'MM',
                            schedule: ['Seg 8:50 - 10:40', 'Ter 8:50 - 10:40'],
                        },
                    ],
                },
                {
                    id: '2',
                    disciplines: [
                        {
                            active: '', name: 'CE1',
                            schedule: ['Seg 8:50 - 10:40', 'Ter 8:50 - 10:40'],
                        },
                        { active: '', name: 'EXP-CE1', schedule: ['Ter 13:10 - 14:50'] },
                    ],
                },
                {
                    id: '3',
                    disciplines: [
                        {
                            active: '', name: 'CTM',
                            schedule: ['Seg 7:10 - 8:50', 'Sex 7:10 - 8:50'],
                        },
                        { active: '', name: 'EXP-CTM', schedule: ['Ter 13:10 - 14:50'] },
                    ],
                },
                {
                    id: '4',
                    disciplines: [
                        {
                            active: '', name: 'ESOF',
                            schedule: ['Ter 7:10 - 8:50', 'Qua 8:50 - 10:40'],
                        },
                    ],
                },
                {
                    id: '5',
                    disciplines: [
                        {
                            active: '', name: 'F3',
                            schedule: ['Qua 14:50 - 16:50', 'Qui 14:50 - 16:50'],
                        },
                        { active: '', name: 'EXP-F3', schedule: ['Qua 13:10 - 14:50'] },
                    ],
                },
                {
                    id: '6',
                    disciplines: [
                        {
                            active: '', name: 'SISII',
                            schedule: ['Ter 16:50 - 18:30', 'Qui 16:50 - 18:30'],
                        },
                    ],
                },
            ],
        },
    ]
}

const initialState = getFromSessionStorage('disciplinesState') || setInitialSessionStorage()

const dayHelper = {
    'SEG': 0, 'TER': 1, 'QUA': 2, 'QUI': 3, 'SEX': 4, 'SAB': 5
}

const amHelper = {
    '7:10': 0,
    '8:00': 1,
    '8:50': 2,
    '9:40': 3,
    '10:40': 4,
    '11:30': 5,
    '12:20': 6,
}

const pmHelper = {
    '13:10': 0,
    '14:00': 1,
    '14:50': 2,
    '15:40': 3,
    '16:50': 4,
    '17:40': 5,
    '18:30': 6,
}

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

function handleAddDisciplineSchedule(actualState, discipline) {
    let newState = { ...actualState.schedule }
    let callRemoveState = false;

    const dayIndexPositionList = discipline.schedule.map(obj => dayHelper[obj.split('').splice(0, 3).join('').toUpperCase()])
    const hourIndexPositionList = discipline.schedule.map(obj => obj.split('').splice(3).join('').split('-').map(obj => obj.trim()))
        .map(handleHourIndex)

    dayIndexPositionList.forEach((dayObj, dayIndex) => {
        const turn = hourIndexPositionList[dayIndex].turn
        hourIndexPositionList[dayIndex].listIndex.forEach((hourPos) => {
            if (turn === 'am') {
                if (newState.amTime[hourPos].disciplines[dayObj].includes(discipline.name)) {
                    callRemoveState = true;
                    return;
                }

                if (newState.amTime[hourPos].disciplines[dayObj]) {
                    newState.amTime[hourPos].disciplines[dayObj] = newState.amTime[hourPos].disciplines[dayObj] + ' | ' + discipline.name
                    return
                }
                newState.amTime[hourPos].disciplines[dayObj] = discipline.name
                return;
            }

            if (newState.pmTime[hourPos].disciplines[dayObj].includes(discipline.name)) {
                callRemoveState = true;
                return;
            }

            if (newState.pmTime[hourPos].disciplines[dayObj]) {
                newState.pmTime[hourPos].disciplines[dayObj] = newState.pmTime[hourPos].disciplines[dayObj] + ' | ' + discipline.name
                return
            }
            newState.pmTime[hourPos].disciplines[dayObj] = discipline.name
        })
    })

    if (callRemoveState) {
        newState = handleRemoveDisciplineSchedule(actualState, discipline.name)
    }

    return newState;
}

function handleHourIndex(limits) {
    if (amHelper[limits[1]]) {
        const max = amHelper[limits[1]]
        const min = amHelper[limits[0]]
        return { turn: 'am', listIndex: getHourIndexList(max, min) }
    }
    const max = pmHelper[limits[1]]
    const min = pmHelper[limits[0]]
    return { turn: 'pm', listIndex: getHourIndexList(max, min) }
}

function getHourIndexList(max, min) {
    let indexList = [];
    for (let index = min; index <= max - 1; index++) {
        indexList.push(index)
    }
    return indexList;
}

function handleRemoveDisciplineSchedule(actualState, discipline) {
    let newState = { ...actualState.schedule }
    newState.amTime = newState.amTime.map(amTimeObj => {
        return { rowHour: amTimeObj.rowHour, disciplines: mapRemovedDisciplines(amTimeObj, discipline) }
    })
    newState.pmTime = newState.pmTime.map(pmTimeObj => {
        return { rowHour: pmTimeObj.rowHour, disciplines: mapRemovedDisciplines(pmTimeObj, discipline) }
    })

    return newState;
}

function mapRemovedDisciplines(turnObj, discipline) {
    return turnObj.disciplines.map(objDiscipline => {
        if (!objDiscipline.includes(discipline)) {
            return objDiscipline
        }

        if (objDiscipline.includes('|')) {
            if (objDiscipline.split('|')[0].includes(discipline)) {
                return objDiscipline.split('|')[1].trim()
            }
            return objDiscipline.split('|')[0].trim()

        }
        if(objDiscipline === discipline) {
            return ''
        }
        return objDiscipline        
    })
}

function handleToggleClassDisciplinesPeriod(actualState, discipline) {

    let newStatePeriod = [...actualState.period]
    newStatePeriod.forEach((obj, index1) => {
        obj.chainDisciplines.forEach((obj2, index2) => {
            obj2.disciplines.forEach((obj3, index3) => {
                if (obj3.name === discipline) {
                    newStatePeriod[index1].chainDisciplines[index2].disciplines[index3] = {
                        ...newStatePeriod[index1].chainDisciplines[index2].disciplines[index3],
                        active: newStatePeriod[index1].chainDisciplines[index2].disciplines[index3].acttive ? '' : 'selected'
                    }
                }
            })
        })
    })

    return newStatePeriod;
}

export const disciplinesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_DISCIPLINE:
            const newStateAddingDiscipline = {
                schedule: handleAddDisciplineSchedule(state, action.discipline),
                period: handleToggleClassDisciplinesPeriod(state, action.discipline.name),
            }
            setSessionStorage('disciplinesState', newStateAddingDiscipline);
            return newStateAddingDiscipline
        case REMOVE_DISCIPLINE:
            //TODO: Disparar para o lado das disciplinas
            const newStateRemoveDiscipline = {
                schedule: handleRemoveDisciplineSchedule(state, action.disciplineToRemove),
                period: handleToggleClassDisciplinesPeriod(state, action.disciplineToRemove),
            }
            setSessionStorage('disciplinesState', newStateRemoveDiscipline);
            return newStateRemoveDiscipline
        default:
            return state;
    }
};
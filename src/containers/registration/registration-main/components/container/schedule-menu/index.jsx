import React from 'react'
import { Paper, Divider, Tooltip } from '@material-ui/core'

import { Remove as RemoveIcon, Warning as WarningIcon } from '@material-ui/icons'

const columnPosition = {
    1: 'seg',
    2: 'ter',
    3: 'qua',
    4: 'qui',
    5: 'sex',
    6: 'sab',
}

const rowPositionAM = {
    0: '7:10',
    1: '8:00',
    2: '8:50',
    3: '9:40',
    4: '10:40',
    5: '11:30',
    6: '12:20',
}

const rowPositionPM = {
    0: '13:10',
    1: '14:00',
    2: '14:50',
    3: '15:40',
    4: '16:50',
    5: '17:40',
    6: '18:30',
}

function resolveDayOfWeek(index) {
    return columnPosition[index]
}

function resolveHour(index, period) {
    if (period === 'am') {
        return rowPositionAM[index]
    }
    return rowPositionPM[index]
}

function handleMouseIn(discipline) {}

function handleMouseOut(discipline) {}

function ScheduleMenu(props) {
    const [state, setState] = React.useState({
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
    })

    function hashGenerator(size) {
        const alphabet = 'abcdefghijklmnopqrstuvxyz1234567890ABCDEFGHIJKLMNOPQRSTUVXYZ'
        let hash
        for (let i = 0; i < size; i++) {
            hash += alphabet[Math.floor(Math.random() * alphabet.length)]
        }
        return hash
    }

    function generateWarningIcon(disciplines) {
        const baseTitle = 'As seguintes disciplinas estão com conflito:\n'
        const conflictDisciplines = disciplines.split('|').join('e')
        return (
            <Tooltip title={`${baseTitle} ${conflictDisciplines}`}>
                <WarningIcon />
            </Tooltip>
        )
    }

    function mapDisciplines(amTimeObj, discipline) {
        return amTimeObj.disciplines.map(objDiscipline => {
            if (!discipline.includes('|') && objDiscipline === discipline) {
                return ''
            }
            return objDiscipline
        })
    }

    function handleRemoveDiscipline(discipline) {
        let newState = { ...state }
        newState.amTime = state.amTime.map(amTimeObj => {
            return { rowHour: amTimeObj.rowHour, disciplines: mapDisciplines(amTimeObj, discipline) }
        })
        newState.pmTime = state.pmTime.map(pmTimeObj => {
            return { rowHour: pmTimeObj.rowHour, disciplines: mapDisciplines(pmTimeObj, discipline) }
        })
        setState(newState)

        // callRemoveDiscipline()
    }

    function generateRemoveIcon(discipline) {
        return discipline !== '' ? (
            <Tooltip
                className="discipline_remove-icon"
                title={`Clique para remover a disciplina ${discipline}`}
                onClick={handleRemoveDiscipline.bind(this, discipline)}
            >
                <RemoveIcon />
            </Tooltip>
        ) : null
    }

    return (
        <div style={{ display: 'inline-block', paddingLeft: '1rem' }}>
            <Paper style={{ width: '34vw', padding: '1rem' }}>
                <Paper>
                    <div className="column__name"> </div>
                    {state.days.map(dayOfWeek => {
                        return (
                            <div key={dayOfWeek} className="column__attribute">
                                {dayOfWeek}
                            </div>
                        )
                    })}
                </Paper>
                <Divider style={{ marginTop: '0.5rem', marginBottom: '0.5rem' }} />
                <div>
                    {state.amTime.map(row => {
                        return (
                            <div key={hashGenerator(16)} style={{ minHeight: '30px' }}>
                                <Paper className="row__name">{row.rowHour}</Paper>
                                {row.disciplines.map(discipline => {
                                    return (
                                        <Paper key={hashGenerator(16)} className="row__atribute">
                                            <div
                                                onMouseEnter={handleMouseIn.bind(this, discipline)}
                                                onMouseLeave={handleMouseOut}
                                            >
                                                {discipline.split('|')[1] ? null : generateRemoveIcon(discipline)}
                                                {discipline.split('|')[1] ? generateWarningIcon(discipline) : discipline}
                                            </div>
                                        </Paper>
                                    )
                                })}
                            </div>
                        )
                    })}
                </div>
                <Divider style={{ marginTop: '0.5rem', marginBottom: '0.5rem' }} />
                <div>
                    {state.pmTime.map(row => {
                        return (
                            <div key={hashGenerator(16)} style={{ minHeight: '30px' }}>
                                <Paper className="row__name">{row.rowHour}</Paper>
                                {row.disciplines.map(discipline => {
                                    return (
                                        <Paper key={hashGenerator(16)} className="row__atribute">
                                            <div>
                                                {discipline.split('|')[1] ? null : generateRemoveIcon(discipline)}
                                                {discipline.split('|')[1] ? generateWarningIcon(discipline) : discipline}
                                            </div>
                                        </Paper>
                                    )
                                })}
                            </div>
                        )
                    })}
                </div>
            </Paper>
        </div>
    )
}

export default ScheduleMenu

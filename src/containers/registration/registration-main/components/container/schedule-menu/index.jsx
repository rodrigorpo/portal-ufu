import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { removeDisciplineFromSchedule } from '../../../../../../actions'

import { Paper, Divider, Tooltip } from '@material-ui/core'
import { Remove as RemoveIcon, Warning as WarningIcon } from '@material-ui/icons'

function handleMouseIn(discipline) {}

function handleMouseOut(discipline) {}

function ScheduleMenu(props) {
    const { state, removeDisciplineFromSchedule } = props

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

    function handleRemoveDiscipline(discipline) {
        removeDisciplineFromSchedule(discipline)
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
const mapStateToProps = store => ({
    state: store.disciplineState.schedule,
})
const mapDispatchToProps = dispatch => bindActionCreators({ removeDisciplineFromSchedule }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(ScheduleMenu)

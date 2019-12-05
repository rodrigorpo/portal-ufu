import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { removeDisciplines } from '../../../../../../actions'

import { Paper, Divider, Tooltip } from '@material-ui/core'
import { Remove as RemoveIcon, Warning as WarningIcon } from '@material-ui/icons'

function ScheduleMenu(props) {
    const { state, removeDisciplines } = props

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
            <Tooltip title={`${baseTitle} ${conflictDisciplines}`} style={{fill: "#ffd42a"}}>
                <WarningIcon />
            </Tooltip>
        )
    }

    function handleRemoveDiscipline(discipline) {
        removeDisciplines(discipline)
    }

    function generateRemoveIcon(discipline) {
        return discipline !== '' && props.location.pathname === '/registration/main' ? (
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
        <div style={props.styles.extern}>
            <Paper style={props.styles.intern}>
                <Paper style={{backgroundColor: "var(--blue)", color: "#fff"}}>
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
const mapDispatchToProps = dispatch => bindActionCreators({ removeDisciplines }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(props => <ScheduleMenu {...props} />))

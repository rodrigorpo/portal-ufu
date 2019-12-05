import React from 'react'
import { connect } from 'react-redux'

import { Typography } from '@material-ui/core'
import Discipline from '../discpline'

function SinglePeriod(props) {
    return (
        <div className="period__single" draggable="false">
            <Typography
                variant="h6"
                style={{ textAlign: 'center'}}
                className="period__title-title"
            >
                {props.periodPack.name}
            </Typography>
            <div className="period__list-item">
                {props.periodPack.chainDisciplines.map(disciplines => {
                    return <Discipline key={disciplines.id} disciplineObj={disciplines} />
                })}
            </div>
        </div>
    )
}

function Period(props) {
    const { periodState } = props
    return (
        <div className="period__list" draggable="false">
            {periodState.map(obj => (
                <SinglePeriod key={obj.name} periodPack={obj} />
            ))}
        </div>
    )
}

const mapStateToProps = store => ({
    periodState: store.disciplineState.period,
})
export default connect(mapStateToProps)(Period)

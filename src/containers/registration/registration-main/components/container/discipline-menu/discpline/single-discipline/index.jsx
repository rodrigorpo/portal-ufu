import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addDiscipline } from '../../../../../../../../actions'

import { Typography, Card, CardContent, CardActionArea } from '@material-ui/core'
import { Info } from '@material-ui/icons'
import DisciplineModal from '../modal-discipline'

function SingleDiscipline(props) {
    const { addDiscipline } = props
    const [style, setStyle] = React.useState('')
    const [open, setOpen] = React.useState(false)
    const [data, setData] = React.useState({ schedule: [] })
    let preventDefault = false

    const handleClose = () => {
        setOpen(false)
    }

    const handleClickInfo = event => {
        setData(props.discipline)
        setOpen(true)
    }
    const handleClickCard = discipline => {
        if (preventDefault) {
            preventDefault = false
            return
        }
        // props.discipline.active
        style === '' ? setStyle('selected') : setStyle('')
        addDiscipline(discipline)
    }

    return (
        <>
            <Card
                style={{ display: 'inline-block', margin: '0.5rem', borderTop: "0.125rem solid #3f51b5" }}
                onClick={() => handleClickCard(props.discipline)}
                className={props.discipline.active}
            >
                <CardActionArea>
                    <CardContent style={{ display: 'flex', justifyContent: 'center' }}>
                        <div style={{ position: 'relative' }}>
                            <Info
                                className="period__help"
                                onClick={e => {
                                    preventDefault = true
                                    handleClickInfo(e)
                                }}
                            />
                            <Typography variant="body1">{props.discipline.name}</Typography>
                            {props.discipline.schedule.map(hour => {
                                return (
                                    <Typography key={hour} style={{ display: 'block' }} variant="subtitle2">
                                        {hour}
                                    </Typography>
                                )
                            })}
                        </div>
                    </CardContent>
                </CardActionArea>
            </Card>
            <DisciplineModal data={data} handleClose={handleClose.bind(this)} open={open} />
        </>
    )
}

const mapDispatchToProps = dispatch => bindActionCreators({ addDiscipline }, dispatch)
export default connect(null, mapDispatchToProps)(SingleDiscipline)

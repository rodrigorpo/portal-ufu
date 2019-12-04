import React from 'react'
import { Typography, Card, CardContent, CardActionArea } from '@material-ui/core'
import { Info } from '@material-ui/icons'
import DisciplineModal from '../modal-discipline'

export default function SingleDiscipline(props) {
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
    const handleClickCard = event => {
        if (preventDefault) {
            preventDefault = false
            return
        }
        style === '' ? setStyle('selected') : setStyle('')
        console.log('Click card')
    }

    return (
        <>
            <Card style={{ display: 'inline-block', margin: '0.5rem' }} onClick={handleClickCard} className={style}>
                <CardActionArea>
                    <CardContent style={{ display: 'flex', justifyContent: 'center' }}>
                        <div style={{ position: 'relative' }}>
                            <Info
                                className="period__help"
                                onClick={e => {
                                    preventDefault = true
                                    handleClickInfo()
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

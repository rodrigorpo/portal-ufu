import React from 'react'
import { Paper, Typography, Checkbox } from '@material-ui/core'

import '../../registration/registration-main/registration.css'

import BottomRegistrationMain from '../registration-main/components/bottom'
import ScheduleMenu from '../registration-main/components/container/schedule-menu'

export default function RegistrationConfirmSchedule() {
    const styles = { extern: { paddingLeft: '1rem' }, intern: { width: '100%', padding: '1rem' } }
    const [state, setState] = React.useState(false)

    function handleChange() {
        setState(!state)
    }
    return (
        <>
            <div className="container__head">
                <Typography className="container-title">Confirmação de horário</Typography>
            </div>
            <Paper className="container-fluid">
                <div className="disciplines">
                    <ScheduleMenu styles={styles} />
                </div>
            </Paper>
            <div className="container-fluid">
                <Checkbox
                    checked={state}
                    onChange={handleChange}
                    value="checkedB"
                    color="primary"
                    inputProps={{
                        'aria-label': 'secondary checkbox',
                    }}
                    style={{display: "inline-block"}}
                />
                <Typography style={{display: "inline-block"}}>Aceito o horário atual</Typography>
            </div>
            <BottomRegistrationMain currentLocation={2} buttonDisable={!state}/>
        </>
    )
}

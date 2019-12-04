import React from 'react'
import { Paper, Typography } from '@material-ui/core'

import './registration.css'

import Bottom from './components/bottom'
import ContainerDiscipline from './components/container'

export default function RegistrationMain() {
    return (
        <>
            <div className="container__head">
                <Typography className="container-title">Escolha suas disciplinas do semestre</Typography>
            </div>
            <Paper className="container-fluid">
                <ContainerDiscipline />
            </Paper>
            <Bottom />
        </>
    )
}

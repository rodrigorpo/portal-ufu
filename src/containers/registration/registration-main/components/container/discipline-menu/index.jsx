import React from 'react'
import Period from './period'
import { Paper } from '@material-ui/core'

export default function DisciplineMenu() {
    return (
        <div style={{ display: 'inline-block' }}>
            <Paper style={{ width: '40vw' }}>
                <Period />
            </Paper>
        </div>
    )
}

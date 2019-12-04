import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Modal, Divider, Button } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    paper: {
        position: 'absolute',
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        top: '20vh',
        left: '33vw',
        width: '35vw',
    },
}))

function DisciplineModal(props) {
    const classes = useStyles()
    return (
        <div>
            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={props.open}
                onClose={props.handleClose}
            >
                <div className={classes.paper}>
                    <h2 id="simple-modal-title" style={{ textAlign: 'center' }}>
                        {props.data.name}
                    </h2>
                    <Divider style={{ marginBottom: '1rem' }} />
                    <p id="simple-modal-description" style={{ marginBottom: '0.3rem' }}>
                        Sigla: {props.data.name}
                    </p>
                    <p id="simple-modal-description" style={{ marginBottom: '0.3rem' }}>
                        Faculdade: FEELT
                    </p>
                    <p id="simple-modal-description" style={{ marginBottom: '0.3rem' }}>
                        Professor: João
                    </p>
                    <div id="simple-modal-description">
                        Horário:
                        {props.data.schedule.map(obj => (
                            <p key={obj} style={{ display: 'block', marginBottom: '0' }}>
                                - {obj}
                            </p>
                        ))}
                    </div>
                    <Divider style={{ marginBottom: '1rem' }} />
                    <p id="simple-modal-description">Vagas Preenchidas: 16/20 - Sua Colocação: 14</p>
                    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <Button color="primary" onClick={props.handleClose}>
                            Ok
                        </Button>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default DisciplineModal

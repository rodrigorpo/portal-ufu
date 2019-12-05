import React from 'react'
import { Paper, Typography, Divider, Button } from '@material-ui/core'

import { Link } from 'react-router-dom'

import BottomRegistrationMain from '../registration-main/components/bottom'

function FinishRegistration() {
    return (
        <div style={{ padding: '2rem' }}>
            <Paper className="container-fluid" style={{ padding: '2rem' }}>
                <Typography variant="h4" style={{ padding: '1rem', textAlign: 'center' }}>
                    Sua solicitação foi processada com sucesso!
                </Typography>
                <Divider />
                <div className="disciplines" style={{ minHeight: '50vh' }}>
                    <div style={{ marginTop: '2rem', marginBottom: '1rem' }}>
                        <div style={{ display: 'inline-block', width: '50%' }}>
                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                <Button color="primary">Baixar PDF</Button>
                            </div>
                        </div>
                        <div style={{ display: 'inline-block', width: '50%' }}>
                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                <Button color="primary">Enviar por email</Button>
                            </div>
                        </div>
                    </div>
                    <div style={{ marginTop: '2rem', marginBottom: '1rem' }}>
                        <div style={{ display: 'inline-block', width: '50%' }}>
                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                <Button color="primary">Visualizar online</Button>
                            </div>
                        </div>
                        <div style={{ display: 'inline-block', width: '50%', position: 'relative' }}>
                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                <Button color="primary">
                                    Editar
                                    <Link to="/registration/main" className="global-expansive" />
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
                        <Button variant="outlined" color="primary">
                            Voltar a Dashboard
                            <Link to="/dashboard" className="global-expansive" />
                        </Button>
                    </div>
                </div>
            </Paper>
            <BottomRegistrationMain currentLocation={4} />
        </div>
    )
}

export default FinishRegistration

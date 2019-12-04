import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import { Paper, TextField, Typography, Button, FormControl, Divider } from '@material-ui/core'

import { Link } from 'react-router-dom'
// import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}))

function Navbar(props) {
    const [nameState, setNameState] = React.useState({
        name: '',
    })

    return (
        <>
            <div
                style={{
                    height: '100vh',
                    width: '100vw',
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    backgroundImage: 'url(./images/ufu.jpg)',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    zIndex: '-1',
                }}
            ></div>
            <div
                style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '90vh', position: 'relative' }}
            >
                <Paper elevation={10} className={useStyles.root} square={true} style={{ minWidth: '40vw' }}>
                    <div style={{ textAlign: 'center' }}>
                        <div style={{ textAlign: 'center', display: 'inline-block' }}>
                            <div style={{ padding: '2rem', margin: 'auto' }}>
                                <Typography variant="h3" component="h3">
                                    PORTAL DO ESTUDANTE
                                </Typography>
                                <Typography variant="h5" component="h5" style={{ textAlign: 'left' }}>
                                    Universidade Federal de Uberlândia
                                </Typography>
                            </div>
                        </div>
                        <Divider
                            light
                            orientation={'horizontal'}
                            style={{ padding: '0.03rem', width: '80%', marginLeft: '10%' }}
                        />
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            minHeight: '55vh',
                            maxWidth: '70vw',
                        }}
                    >
                        <div style={{ padding: '3rem', display: 'inline-block', width: '30%' }}>
                            <FormControl className={useStyles.root} noValidate autoComplete="off">
                                <TextField
                                    style={{ marginLeft: '1rem', display: 'block' }}
                                    id="standard-basic"
                                    label="Username"
                                    onChange={e => setNameState({ name: e.target.value })}
                                />
                                <TextField
                                    style={{ marginLeft: '1rem', display: 'block' }}
                                    id="standard-password-input"
                                    label="Password"
                                    type="password"
                                    autoComplete="current-password"
                                    margin="normal"
                                />
                                <Typography
                                    component="p"
                                    style={{ marginLeft: '1rem', marginBottom: '0.5rem', fontSize: '13px' }}
                                >
                                    <a href="/create-account">Não Possui conta?</a>
                                </Typography>
                                <Typography component="p" style={{ marginLeft: '1rem', marginBottom: '1rem', fontSize: '13px' }}>
                                    <a href="/forgot-password">Esqueceu sua senha?</a>
                                </Typography>
                                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                    <Link to="/dashboard">
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            onClick={() => props.changeName(nameState.name)}
                                        >
                                            LOGIN
                                        </Button>
                                    </Link>
                                </div>
                            </FormControl>
                        </div>
                        <Divider
                            light
                            orientation={'vertical'}
                            style={{
                                height: '20rem',
                                width: '0.1rem',
                                display: 'inline-block',
                                position: 'absolute',
                                top: '32vh',
                                left: '40vw',
                            }}
                        />
                        <div style={{ display: 'inline-block', paddingRight: '1rem', maxWidth: '60%' }}>
                            <div>
                                <Typography variant="subtitle1" component="h5" style={{ marginBottom: '0.2rem' }}>
                                    ALUNO ESPECIAL DA PÓS-GRADUAÇÃO
                                </Typography>
                                <Typography variant="subtitle1" style={{ marginBottom: '2rem' }}>
                                    Solicitar a matrícula na respectiva Coordenação do Curso.
                                </Typography>
                            </div>
                            <div>
                                <Typography
                                    variant="subtitle1"
                                    component="h5"
                                    style={{ marginTop: '2rem', marginBottom: '0.2rem' }}
                                >
                                    PROVIDENCIAR EMAIL INSTITUCIONAL
                                </Typography>
                                <Typography variant="subtitle1" style={{ marginBottom: '1rem' }}>
                                    <div style={{ width: '90%' }}>
                                        Acesse o endereço eletrônico: https://www.idufu.ufu.br/, informe sua matrícula e senha do
                                        portal do estudante para Ativar Conta Aluno.
                                    </div>
                                </Typography>
                            </div>
                            <div>
                                <Typography
                                    variant="subtitle1"
                                    component="h5"
                                    style={{ marginTop: '2rem', marginBottom: '0.2rem' }}
                                >
                                    ESTUDANTES INGRESSANTES
                                </Typography>
                                <Typography variant="subtitle1" style={{ marginBottom: '1rem' }}>
                                    Solicitar a Identidade Acadêmica da UFU.
                                </Typography>
                            </div>
                            <div>
                                <Typography
                                    variant="subtitle1"
                                    component="h5"
                                    style={{ marginTop: '2rem', marginBottom: '0.2rem' }}
                                >
                                    PRIMEIRO ACESSO
                                </Typography>
                                <Typography variant="subtitle1" style={{ marginBottom: '1rem' }}>
                                    Para o seu primeiro acesso <a href="/limbo">Clique Aqui.</a>
                                </Typography>
                            </div>
                        </div>
                    </div>
                </Paper>
            </div>
        </>
    )
}

export default Navbar

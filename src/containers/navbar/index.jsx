import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'


const dashName = {
    '/': {
        name: 'Landing Page',
    },
    '/dashboard': {
        name: 'Dashboard',
    },
    '/registration': {
        name: 'Matrícula',
    },
    '/registration/main': {
        name: 'Matrícula',
    },
    '/registration/schedule': {
        name: 'Matrícula',
    },
    '/registration/reorder': {
        name: 'Matrícula',
    },
}

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
    const menuNameDisplay = dashName[window.location.pathname] ? dashName[window.location.pathname].name : 'Name'
    const classes = useStyles()
    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="menu"
                        onClick={props.emmitOpenDrawerEvent}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        {menuNameDisplay}
                    </Typography>
                    <div
                        style={{
                            fontWeight: '500',
                            lineHeight: '1.75',
                            borderRadius: '4px',
                            letterSpacing: '0.02857em',
                            fontFamily: 'Roboto',
                        }}
                    >
                        <span>Portal do Estudante</span>
                        <span> | </span>
                    </div>
                    <Button color="inherit">
                        <AccountCircleIcon />
                        <span style={{ marginLeft: '0.3rem' }}>{props.name}</span>
                    </Button>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar

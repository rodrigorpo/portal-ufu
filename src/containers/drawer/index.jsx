import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Drawer, List, Divider, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import AssignmentIcon from '@material-ui/icons/Assignment'
import DashboardIcon from '@material-ui/icons/Dashboard'
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile'
import AccountBoxIcon from '@material-ui/icons/AccountBox'
import DateRangeIcon from '@material-ui/icons/DateRange'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import { Link } from 'react-router-dom'

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
})

export default function TemporaryDrawer(props) {
    const classes = useStyles()

    const sideList = () => (
        <div
            className={classes.list}
            role="presentation"
            onClick={props.emmitCloseDrawerEvent}
            onKeyDown={props.emmitCloseDrawerEvent}
        >
            <List>
                {['Dashboard'].map((text, index) => (
                    <Link to="/dashboard" key={text}>
                        <ListItem button>
                            <ListItemIcon>
                                <DashboardIcon />
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    </Link>
                ))}
            </List>
            <Divider />
            <List>
                {[
                    { name: 'Matrícula', path: '/registration/main' },
                    { name: 'Documentos', path: '/registration' },
                    { name: 'Calendário Estudantil', path: '/registration' },
                    { name: 'Identidade Acadêmica', path: '/registration' },
                    { name: 'Solicitações Gerais', path: '/registration' },
                ].map(obj => (
                    <Link key={obj.name} to={obj.path}>
                        <ListItem button >
                            {obj.name === 'Matrícula' ? (
                                <ListItemIcon>
                                    <AssignmentIcon />
                                </ListItemIcon>
                            ) : null}
                            {obj.name === 'Documentos' ? (
                                <ListItemIcon>
                                    <InsertDriveFileIcon />
                                </ListItemIcon>
                            ) : null}
                            {obj.name === 'Calendário Estudantil' ? (
                                <ListItemIcon>
                                    <DateRangeIcon />
                                </ListItemIcon>
                            ) : null}
                            {obj.name === 'Identidade Acadêmica' ? (
                                <ListItemIcon>
                                    <AccountBoxIcon />
                                </ListItemIcon>
                            ) : null}
                            {obj.name === 'Solicitações Gerais' ? (
                                <ListItemIcon>
                                    <MoreHorizIcon />
                                </ListItemIcon>
                            ) : null}
                            <ListItemText primary={obj.name} />
                        </ListItem>
                    </Link>
                ))}
            </List>
        </div>
    )

    return (
        <div>
            <Drawer open={props.drawerState.left} onClose={props.emmitCloseDrawerEvent}>
                {sideList()}
            </Drawer>
        </div>
    )
}

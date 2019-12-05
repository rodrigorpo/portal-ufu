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
                    <ListItem button key={text} style={{ position: 'relative' }}>
                        <ListItemIcon>
                            <DashboardIcon />
                        </ListItemIcon>
                        <ListItemText primary={text} />
                        <Link to={'/dashboard'} className="global-expansive" />
                    </ListItem>
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
                    <ListItem button key={obj.name} style={{ position: 'relative' }}>
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
                        <Link to={obj.path} className="global-expansive" />
                    </ListItem>
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

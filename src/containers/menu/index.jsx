import React from 'react'
import Navbar from '../navbar'
import Drawer from '../drawer'

function emmitOpenDrawerEvent(changeState) {
    changeState({ left: true })
}

function emmitCloseDrawerEvent(changeState) {
    changeState({ left: false })
}

function Menu(props) {
    const [drawerState, setDrawerState] = React.useState({
        left: false,
    })

    return (
        <>
            <Navbar
                emmitOpenDrawerEvent={() => {
                    emmitOpenDrawerEvent(setDrawerState)
                }}
                name={props.name}
            />
            <Drawer drawerState={drawerState} emmitCloseDrawerEvent={() => emmitCloseDrawerEvent(setDrawerState)} />
        </>
    )
}

export default Menu

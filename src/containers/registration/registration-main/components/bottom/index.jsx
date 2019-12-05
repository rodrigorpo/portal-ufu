import React from 'react'
import { Button } from '@material-ui/core'
import { ArrowForward } from '@material-ui/icons'
import { Link } from 'react-router-dom'

export default function BottomRegistrationMain(props) {
    const classNameSelectable = 'bottom_circle bottom_circle_selectable'
    const classNameDefault = 'bottom_circle'

    const resolvePath = currentLocation => {
        switch (currentLocation) {
            case 1:
                return paths.second
            case 2:
                return paths.third
            case 3:
                return paths.fourth
            default:
                return paths.first
        }
    }

    const paths = {
        first: '/registration/main',
        second: '/registration/confirm-schedule',
        third: '/registration/order-conflict-disciplines',
        fourth: '/registration/finish',
    }
    return (
        <div className="bottom container-fluid">
            <div className="bottom__progress-bar">
                <div className="bottom__separator"></div>
                <div>
                    <Link to={paths.first}>
                        <div className={props.currentLocation === 1 ? classNameSelectable : classNameDefault}>1</div>
                    </Link>
                </div>
                <div className="bottom_circle_space">
                    <Link to={paths.second}>
                        <div className={props.currentLocation === 2 ? classNameSelectable : classNameDefault}>2</div>
                    </Link>
                </div>
                <div className="bottom_circle_space_2">
                    <Link to={paths.third}>
                        <div className={props.currentLocation === 3 ? classNameSelectable : classNameDefault}>3</div>
                    </Link>
                </div>
                <div>
                    <Link to={paths.fourth}>
                        <div className={props.currentLocation === 4 ? classNameSelectable : classNameDefault}>4</div>
                    </Link>
                </div>
            </div>
            <div className="bottom__proceed">
                <Button color="primary" disabled={props.buttonDisable}>
                    Prosseguir <ArrowForward />
                    {props.buttonDisable ? null : <Link to={resolvePath(props.currentLocation)} className="global-expansive" />}
                </Button>
            </div>
        </div>
    )
}

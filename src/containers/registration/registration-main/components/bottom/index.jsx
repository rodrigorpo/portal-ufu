import React from 'react'
import { Button } from '@material-ui/core'
import { ArrowForward } from '@material-ui/icons'
import { Link } from 'react-router-dom'

export default function BottomRegistrationMain() {
    return (
        <div className="bottom container-fluid">
            <div className="bottom__progress-bar">
                <div className="bottom__separator"></div>
                <div>
                    <Link to="/registration/main">
                        <div className="bottom_circle bottom_circle_selectable">1</div>
                    </Link>
                </div>
                <div className="bottom_circle_space">
                    <Link to="/registration/confirm-schedule">
                        <div className="bottom_circle">2</div>
                    </Link>
                </div>
                <div className="bottom_circle_space_2">
                    <Link to="/registration/order-conflict-disciplines">
                        <div className="bottom_circle">3</div>
                    </Link>
                </div>
                <div>
                    <Link to="/registration/finish">
                        <div className="bottom_circle">4</div>
                    </Link>
                </div>
            </div>
            <div className="bottom__proceed">
                <Button color="primary">
                    Prosseguir <ArrowForward />
                </Button>
            </div>
        </div>
    )
}

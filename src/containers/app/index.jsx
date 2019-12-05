import React from 'react'
import Menu from '../menu/'
import LandingPage from '../landingPage'
import Dashboard from '../dashboard'
import RegistrationMain from '../registration/registration-main'
import RegistrationConfirmSchedule from '../registration/confirm-schedule'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { Store } from '../../store'
import PriorityOrder from '../registration/priority-order'
import FinishRegistration from '../registration/finish'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = { name: this.getFromSessionStorage() || 'login' }
    }

    getFromSessionStorage() {
        return window.localStorage.getItem('navbar-name')
    }

    saveOnSessionStorage(name) {
        window.localStorage.setItem('navbar-name', name)
    }

    changeName(name) {
        this.saveOnSessionStorage(name)
        this.setState({ name })
    }

    render() {
        return (
            <>
                <Provider store={Store}>
                    <BrowserRouter>
                        <Menu name={this.state.name} />
                        <Switch>
                            <Route
                                path="/"
                                exact={true}
                                component={() => <LandingPage changeName={this.changeName.bind(this)} />}
                            />
                            <Route path="/dashboard" component={Dashboard} />
                            <Route path="/registration/main" component={RegistrationMain} />
                            <Route path="/registration/confirm-schedule" component={RegistrationConfirmSchedule} />
                            <Route path="/registration/order-conflict-disciplines" component={PriorityOrder} />
                            <Route path="/registration/finish" component={FinishRegistration} />
                        </Switch>
                    </BrowserRouter>
                </Provider>
            </>
        )
    }
}

export default App

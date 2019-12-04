import React from 'react'
import Menu from '../menu/'
import LandingPage from '../landingPage'
import Dashboard from '../dashboard'
import RegistrationMain from '../registration/registration-main'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { Store } from '../../store'

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
                        </Switch>
                    </BrowserRouter>
                </Provider>
            </>
        )
    }
}

export default App

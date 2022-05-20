import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Home from '../pages/Home'
import About from '../pages/About'
import Service from '../pages/Service'
import Contact from '../pages/Contact';
import Users from '../pages/Users'
import VIewUser from './VIewUser'

function CustomRoutes() {
    return (
        <Switch>
            <Route path='/home' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/service' component={Service} />
            <Route path='/contact' component={Contact} />
            <Route path="/users/:id" component={VIewUser} />
            <Route path='/users' component={Users} />
            <Route path="/" exact>
                <Redirect to="/home" />
            </Route>
            <Route path="*" render={() => <h1>Page not found</h1>} />
        </Switch>
    )
}

export default CustomRoutes

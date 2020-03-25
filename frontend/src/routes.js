import React from 'react'
import { BrowserRouter, Route , Switch } from 'react-router-dom'

import Logon from './pages/logon/index';
import Register from './pages/Register/index';
import Profile from './pages/Profiles/index';
import NewIncident from './pages/NewIncident/index';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Logon} />
                <Route path='/register'  component={Register} exact />
                <Route path='/profile'  component={Profile} exact/>
                <Route path="/incidents/new" component={NewIncident} exact />
            </Switch>
        </BrowserRouter>
    );
}
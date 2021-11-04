import React, { Component } from 'react'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import Homepage from './Homepage';
import Registration from './Registration';
import Header from './Header';
import Login from './Login';

const Main = () => (
    <React.Fragment>
    <Header/>
    <BrowserRouter>
        <Switch>
            <Route path="/" component={Homepage} exact={true}/>
            <Route path="/Registration" component={Registration} exact/>
            <Route path="/Login" component={Login} />

            
        </Switch>
    </BrowserRouter>
    </React.Fragment>
)

export default Main;
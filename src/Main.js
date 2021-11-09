import React, { Component } from 'react'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import home from './base';
import Homepage from './Homepage';
import Registration from './Registration';
import Header from './Header';
import Login from './Login';
import './base.css'
import ChangePassword from './ChangePasssword';
import AllUsers from './AllUseres';
import DisplayMyTweet  from './VIewMyTweets'

const Main = () => (
    <React.Fragment className="imp">
    
    <BrowserRouter>
        <Header/>
        <Switch>
            <Route path="/" component={home} exact={true}/>
            <Route path="/Registration" component={Registration} exact/>
            <Route path="/Login" component={Login} />
            {localStorage.getItem("isLoggedIn") &&
 <Route path="/Dashboard" component={Homepage} />}
            {localStorage.getItem("isLoggedIn") &&
            <Route path="/ChangePassword" exact component={ChangePassword} />
            }
            <Route path="/getAllUsers" exact component={AllUsers} />
            <Route path="/getAllMyTweets" exact component={DisplayMyTweet} />
            
        </Switch>
    </BrowserRouter>
    </React.Fragment>
)

export default Main;
import React, { useState } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import home from '../../base';
import Homepage from './Homepage';
import Registration from '../LoginComponnet/Registration';
import Header from './Header';
import Login from '../LoginComponnet/Login';
import '../../Extrs/base.css'
import ChangePassword from '../LoginComponnet/ChangePasssword';
import AllUsers from '../TweetsComponnet/AllUseres';
import DisplayMyTweet  from '../TweetsComponnet/VIewMyTweets'
import ErrorPage from './ErrorPage';



function Main () {
    function handlelogout(){
        isLogged(false)
    }
    function loginx(){
        isLogged(true)
    }
    const [loggedin,isLogged] = useState(false);
    return(
    <React.Fragment className="imp">
    
    <BrowserRouter>
    {console.log("in main")}
    {console.log(loggedin)}
    <Header loginfo={loggedin} logout={handlelogout}/>
        <Switch>
            {loggedin && <Route path="/" component={home} exact={true}/>}
            <Route path="/Registration" component={Registration} exact/>
           <Route path="/Login" component={()=><Login loginx={loginx}/> } />
            {loggedin && 
             <Route path="/Dashboard" component={Homepage} />}
             {loggedin && 
            <Route path="/ChangePassword" exact component={ChangePassword} />
            }
            {loggedin && <Route path="/getAllUsers" exact component={AllUsers} />}
           {loggedin &&  <Route path="/getAllMyTweets" exact component={DisplayMyTweet} />}
           <Route   component={ErrorPage} />
            
            
        </Switch>
    </BrowserRouter>
    </React.Fragment>
)}

export default Main;
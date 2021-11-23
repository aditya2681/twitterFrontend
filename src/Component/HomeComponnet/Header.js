import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import * as ReactBootstrap from 'react-bootstrap';
import { BrowserRouter, NavLink , Redirect} from 'react-router-dom';
export default function Header (props){
    const [isLoggedin,changeloggedin]=useState(props.loginfo)
return(
         <div>
            
            {console.log(props)}
                    
<div>
                            <ul class="nav justify-content-center">
                <li className="nav-item">
                <NavLink className="nav-link" to="/Registration">Register</NavLink>
                </li>
                <li className="nav-item">
                <NavLink to="/Login" className="nav-link">Login</NavLink>
                </li>
                <li className="nav-item">
                <NavLink to="/getAllUsers" className="nav-link">View Users</NavLink>
                </li>
                <li className="nav-item">
                <NavLink to="/getAllMyTweets" className="nav-link">My Tweets</NavLink>
                </li>
              
               
                <li className="nav-item">
                <NavLink className="nav-link" to="/ChangePassword">Change Password</NavLink>
                </li>
                </ul>
                <ul class="nav justify-content-end">
                <li className="nav-item">
                <NavLink to ="/Login" className="nav-link" onClick={props.logout}>Logout</NavLink> 
                </li>
                    </ul>
                </div>
                
        </div>
)
    }


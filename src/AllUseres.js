import { useSSRSafeId } from '@react-aria/ssr';
import React, { useEffect, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import CommentModal from './CommentsModal';
import { useDispatch,useSelector } from 'react-redux';
import { expire } from './Actions/TokenAction';
import logo from './logo.webp';


import './showtweet.css'
import AddTweet from './AddTweet';
import axios from 'axios';
 function AllUsers(props){
 
    const [users, changeusers] =useState([])

    console.log("In allUsers component")
   
    useEffect(()=>{
        axios.get("http://localhost:8090/getAllUsers").then((respoonse)=>{
            console.log(respoonse.data)
        changeusers(respoonse.data)
        console.log(users)
        })
    },[])


        return <div className="container displaycontainer">

{  users.map( r=>(
    
            <div className="row container showusers">
                <div className="col-lg-4">
                    User:
                    <br/>
                    Email Adddres:
                </div>
                <div className="col-lg-8">
                    {r.firstName}, {r.lastName}
                    <br/>
                    {r.emailId}               
                </div>
            </div>
            ))}
            
        </div>;
    }

export default AllUsers;


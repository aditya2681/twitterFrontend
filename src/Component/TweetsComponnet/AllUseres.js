import { useSSRSafeId } from '@react-aria/ssr';
import React, { useEffect, useState} from 'react';




import '../../Extrs/showtweet.css'
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


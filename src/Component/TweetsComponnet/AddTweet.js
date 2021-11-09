import React, { Component, useState } from 'react'
import '../../Extrs/addtweet.css'
import axios from 'axios';

import { Redirect } from 'react-router';
import { propTypes } from 'react-bootstrap/esm/Image';
import { useDispatch, useSelector } from 'react-redux';
import {expire} from '../../Actions/TokenAction'
// import React, { Component } from 'react'

    export default function AddTweet(props){


        const [tweet,changetweet] = useState('');
        const jwt = useSelector(state=>state.tokenReducer)
        const [success, setSuccess]= useState(false)
        const dispatch = useDispatch()

    const forSubmit=(event)=>{
        event.preventDefault();
       console.log(tweet)
        const tweet1 = {
            "emailId": localStorage.getItem("emailId"),
            "tweet":tweet
        }
        
        axios.post("http://localhost:8090/tweet",tweet1).then(function (response) {
            console.log("suppu")
            dispatch(expire(response.data))
            console.log(response);
            setSuccess(true)
            props.changehappen(response.data)
            changetweet('')


          })

    }
  
        return (
            <div className="container asd">
               
                <div className="row container">

                    <div className="col-lg-4">
                        <h1>Username</h1>
                    </div>
                    <div className="col-lg-8">
                        <form onSubmit={forSubmit}>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Tell us about something</label>
                                <input type="text" class="form-control" value={tweet} placeholder="What's Happening"
                                 onChange={(event)=>{
                                    changetweet(event.target.value)
                                 }} />
                                <small id="emailHelp" class="form-text text-muted">Tweeeeet!!</small>
                            </div>
                            <div className="text-left">
                            <button  type="submit" class="btn btn-primary "> Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>


        )
        
}

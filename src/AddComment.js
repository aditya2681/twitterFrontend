import React, { Component, useState } from 'react'
import './addtweet.css'
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

export default function AddComment (props){

    console.log("In add")
    console.log(props.tweet)

    const dummy = useSelector(state=>state.tokenReducer)
    const [reply,changereply]  =useState('');

    const forSubmit=(event)=>{
        event.preventDefault();
       console.log(reply)
        const tweet1 = {
            "emailId": localStorage.getItem("emailId"),
            "reply":reply

        }
        axios.put(`http://localhost:8090/replytweet/${props.tweet.id}`,tweet1).then(function (response) {
            console.log("suppu")
            console.log(response);
            props.updatetweet(response.data)
            changereply('')
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
                                <label for="addComment">Comment on this tweet</label>
                                <input type="text" class="form-control" value={reply} placeholder="What's Happening"
                                 onChange={(event)=>{
                                    changereply(event.target.value)
                                 }} required/>
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

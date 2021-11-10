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
        const [tags, setTags]= useState([])
        const [tagstext, setTagsText]= useState('')
        const dispatch = useDispatch()
        const [characterCount, setCharacterCunt] = useState(144);

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
    const AddTag=(event)=>{
        setTags(prevtags=>[...prevtags,tagstext])
        console.log(tags)
        
        event.preventDefault()
}
const removetag=(tag)=>{
    const temp = [...tags]
    const index = temp.indexOf(tagstext)
    temp.splice(index,1);

    setTags(temp)
    console.log(tags)
    
}
  
        return (
            <div className="container asd">
               
                <div className="row container">

                    <div className="col-lg-4">
                        <h1>{localStorage.getItem("emailId").substr(0,localStorage.getItem("emailId").indexOf('@'))}</h1>
                    </div>
                    <div className="col-lg-8">
                        <form onSubmit={forSubmit}>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Tell us about something</label>
                                <textarea type="text" required maxLength='144' class="form-control" value={tweet} placeholder="What's Happening"
                                 onChange={(event)=>{
                                    changetweet(event.target.value)
                                    setCharacterCunt(144-tweet.length)
                                 }} />
                                 {characterCount} chracters remaining
                                 <div className="row">
                                 <div className="col-sm-4">
                                  <select className = "form-control form-control-sm" value={tagstext} onChange={(event)=>{
                                        setTagsText(event.target.value)
                                     }}>{
                                         props.users.map( u=> 
                                        <option value={u.firstName}>{u.firstName}</option> )
                                        }
                                    </select>
                                     <button onClick={AddTag} className="btn btn-sm btn-danger" > AddTag</button>
                                     
                                     </div>
                                     <div className="col-sm-8">
                                         <div className="row"> 
                                     {tags.map(t=>(<div className="col"> <p onClick={()=> removetag(t)} className="btn btn-sm">{t} x</p> </div>))}
                                        </div>
                                     </div>
                                     </div>
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

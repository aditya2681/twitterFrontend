import { useSSRSafeId } from '@react-aria/ssr';
import React, { useEffect, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import CommentModal from './CommentsModal';
import { useDispatch,useSelector } from 'react-redux';
import { expire } from './Actions/TokenAction';
import DisplayTweet from './show tweets';


import './showtweet.css'
import AddTweet from './AddTweet';
import axios from 'axios';
 export default function DisplayMyTweet(props){
     const [mytweets, setmyTweets]=useState([])
     const tweets = 

     useEffect(()=>{
        axios.get(`http://localhost:8090/getAllTweets/`).then((respoonse)=>{
            console.log(respoonse.data)
            setmyTweets( respoonse.data)
        })
    },[])
    return(
        mytweets.filter(({emailId}) => emailId === localStorage.getItem("emailId")).map(t=>(
        <DisplayTweet tweet={t}/>
    ))
 )
}


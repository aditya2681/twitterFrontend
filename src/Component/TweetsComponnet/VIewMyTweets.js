import { useSSRSafeId } from '@react-aria/ssr';
import React, { useEffect, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import CommentModal from './CommentsModal';
import { useDispatch,useSelector } from 'react-redux';

import DisplayTweet from './show tweets';


import '../../Extrs/showtweet.css'
import axios from 'axios';


 export default function DisplayMyTweet(props){
     function  changehappen(tweet){
        console.log(tweet)
        console.log("qwert")
        // this.setState({tweets:tweet})
        setmyTweets(tweet)
        // console.log(this.state.tweets)
    }
    
     const [mytweets, setmyTweets]=useState([]) 

     useEffect(()=>{
        axios.get(`http://localhost:8090/getAllTweets/`).then((respoonse)=>{
            console.log(respoonse.data)
            setmyTweets( respoonse.data)
        })
    },[])
    return(
        <div>
        {mytweets.filter(({emailId}) => emailId === localStorage.getItem("emailId")).length===0 && 
        <div className=" container notweetes leftChange">
                You don't have any tweets.
             </div>}
        {mytweets.filter(({emailId}) => emailId === localStorage.getItem("emailId")).map(t=>(
        <DisplayTweet tweet={t} changehappen={changehappen}/>
    ))}
    </div>
 )
}


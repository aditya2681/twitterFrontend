import { useSSRSafeId } from '@react-aria/ssr';
import React, { useEffect, useState} from 'react';

import DisplayTweet from './show tweets';


import '../../Extrs/showtweet.css'
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


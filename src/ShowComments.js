import { useSSRSafeId } from '@react-aria/ssr';
import React, { useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import CommentModal from './CommentsModal';



import './showtweet.css'
 function ViewComment(props){
     console.log("in view component")
     console.log(props.tweet.replies)
  
    
        return (
            props.tweet.replies.map( r=>( <div className="container">
        <div className="row ">

            <div className="col-lg-4">
                <h1>{r.emailId}</h1>
            </div>
            <div className="col-lg-8">
                <div className="row">
                    <div className="col-lg-8">
                        <h1>{r.emailId}</h1>
                    </div><div className="col-sm-4">
                        <p>Time</p>
                    </div>
                </div>
                <div className="tweetprint">
                    <h6 >{r.reply }</h6>
                    
                    <div className="row">
                        <div className="col-sm-2">
                         
                        </div>

                    </div>
                </div>
            </div>
        </div>
        
    </div>)))

        
    }

export default ViewComment;


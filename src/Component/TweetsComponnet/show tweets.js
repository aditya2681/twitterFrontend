import { useSSRSafeId } from '@react-aria/ssr';
import React, { useEffect, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import CommentModal from './CommentsModal';
import { useDispatch,useSelector } from 'react-redux';

import logo from '../../Extrs/logo.webp';


import '../../Extrs/showtweet.css'
import axios from 'axios';
 function DisplayTweet(props){
     const dispatch = useDispatch();

    const [tweet, changetweet] =useState(props.tweet);
    const [tweets, changetweets] =useState(props.tweet);

    console.log("In display component")
    console.log(props.tweet)
    const [isOpen, setIsOpen] = useState(false);
    const [modal, setModal] = useState(false);
    function showComments(isOpen){
        setIsOpen(true);
        console.log(isOpen);
    }
    const like={
        "like": localStorage.getItem("emailId")
    }
  
    function doLike(){
        axios.put(`http://localhost:8090/liketweet/${props.tweet.id}`,like).then((response)=>{
            console.log(response)
        
            changetweet(response.data)

        })
    }
    function deleteTweet(){
        axios.delete(`http://localhost:8090/deleltetweet/${props.tweet.id}`).then((response)=>{
            console.log(response)
        
            props.changehappen(response.data)

        })
    }
    function closeComments(isOpen){
        setIsOpen(false);
        console.log(isOpen);
    }


        function toggleModal() {
            setIsOpen(!isOpen);
        }

        return  <div className="container displaycontainer">
            <div className="row ">

                <div className="col-lg-4">
                    <h1><img className="thumbnail img-responsive" width="200" height="200" src={logo} /></h1>
                </div>
                <div className="col-lg-8">
                    <div className="row">
                        <div className="col-lg-6">
                            <h1>{tweet.emailId.substr(0,tweet.emailId.indexOf('@'))}</h1>
                        </div><div className="col-sm-6">
                            <div className="row">
                                <div className="col"> 
                                <p>Date: {tweet.date}</p>
                                </div>
                                <div className="col">
                                <p>Time: {tweet.time}</p>
                                </div>
                            </div>
                            
                            
                        </div>
                    </div>
                    <div className="tweetprint">
                        {props.tweet.tweet}
                        <CommentModal show={isOpen} close={closeComments} comments={tweet}/>
                        <div className="row">
                            <div className="col-sm-2">
                                <button className="btn btn-sm" onClick={doLike}><FontAwesomeIcon icon={faThumbsUp} />{tweet.likes.length}Like</button>
                            </div>
                          
                            <div className="col-sm-2">
                                <button className="btn btn-sm" onClick={showComments} ><FontAwesomeIcon icon={faComment} />Comments</button>
                            </div>
                            {localStorage.getItem('emailId')===tweet.emailId &&
                            <div className="col-sm-4">
                                <button className="btn btn-sm" onClick={deleteTweet} ><FontAwesomeIcon icon={faTrashAlt} />Delete</button>
                            </div>
                                }
                        </div>
                        {/* {tweet.tags.map(t=>(<div>{t}</div>))} */}
                        <div > Tags: 
                                {tweet.tags.map(t=>(
                                    <span className="tags">{t}</span>
                                ))}
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    
    
                            }
export default DisplayTweet;


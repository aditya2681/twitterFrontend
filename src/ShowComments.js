import { useSSRSafeId } from '@react-aria/ssr';
import React, { useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import CommentModal from './CommentsModal';



import './showtweet.css'
 function ViewComment(){
    const [isOpen, setIsOpen] = useState(false);
    const [modal, setModal] = useState(false);
    function showComments(isOpen){
        setIsOpen(true);
        console.log(isOpen);
    }
    function closeComments(isOpen){
        setIsOpen(false);
        console.log(isOpen);
    }
      

        function toggleModal() {
            setIsOpen(!isOpen);
        }

        return <div className="container">
            <div className="row ">

                <div className="col-lg-4">
                    <h1>Username</h1>
                </div>
                <div className="col-lg-8">
                    <div className="row">
                        <div className="col-lg-8">
                            <h1>Usernamsse</h1>
                        </div><div className="col-sm-4">
                            <p>Time</p>
                        </div>
                    </div>
                    <div className="tweetprint">
                        <h6 >Hello this is aditya</h6>
                        <CommentModal show={isOpen} close={closeComments}/>
                        <div className="row">
                            <div className="col-sm-2">
                                <button className="btn btn-sm"><FontAwesomeIcon icon={faThumbsUp} />Like</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            
        </div>;
    }

export default ViewComment;


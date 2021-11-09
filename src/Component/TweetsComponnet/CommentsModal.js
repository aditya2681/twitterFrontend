import React, { useState } from 'react';
import { propTypes } from 'react-bootstrap/esm/Image';
import Modal from 'react-modal';
import "../../Extrs/CommentModal.css";
import AddComment from './AddComment';
import ViewComment from './ShowComments';
import logo from '../../Extrs/comments.jpg';


 export default function CommentModal(props){ 
        const [tweet,changetweet] = useState(props.comments);

        const updatetweet = (data) => {
            changetweet(data)
          }
    
        return(
            <Modal
            isOpen={props.show}
            
            contentLabel="SelectedOption"
            onRequestClose={props.close}
            >
                {console.log("in commentModal component")}
                {console.log(props.comments)}

            <div className="text-center">
            <button onClick={props.close} className="btn btn-primary btn-lg">Close</button>
            </div>
            <div>
            <AddComment tweet={props.comments} updatetweet={updatetweet} />
           
       {  tweet.replies.map( r=>( <div className="container">
        <div className="row ">

            <div className="col-lg-4">
                <h1><img className="thumbnail img-responsive" width="200" height="200" src={logo} /></h1>
            </div>
            <div className="col-lg-8">
                <div className="row">
                    <div className="col-lg-8">
                        <h1>{r.emailId.substr(0,tweet.emailId.indexOf('@'))}</h1>
                    </div><div className="col-sm-4">
                        <p>Time</p>
                    </div>
                </div>
                <div className="tweetprint">
                    <h6 >{r.reply }</h6>
                </div>
            </div>
        </div>
        
    </div>) )}

                
            
            </div>
            
            

            </Modal>
        )
 }

// export default CommentModal;
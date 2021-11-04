import React from 'react';
import { propTypes } from 'react-bootstrap/esm/Image';
import Modal from 'react-modal';
import "./CommentModal.css";
import AddComment from './AddComment';
import ViewComment from './ShowComments';

 const CommentModal =(props)=> (

            <Modal
            isOpen={props.show}
            contentLabel="SelectedOption"
            onRequestClose={props.close}
            >
            <div className="text-center">
            <button onClick={props.close} className="btn btn-primary btn-lg">Close</button>
            </div>
            <div>
            <AddComment/>
            <ViewComment/>
            </div>
            
            

            </Modal>
        )

export default CommentModal;
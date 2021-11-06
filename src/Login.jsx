import axios from 'axios';
import React ,{useState}from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {expire} from '../src/Actions/TokenAction'
// import axios from 'axios';


export default function Login(){


 
    const[emailId,setEmail]=useState('');
    const[Password1,setPassword1]=useState('');
    const[error,seterror]=useState(false);
    const[success,setSuccess]=useState(false);
    const dummy = useSelector(state=>state.tokenReducer)
    const dispatch = useDispatch();


    const forSubmit=(event)=>{
        
        console.log(dummy)
        console.log(emailId)
        
        const LoginCredential = {
            "emailid":emailId,
            "password":Password1
        }
        const jsonObject = JSON.stringify(LoginCredential);
        console.log(jsonObject);
        axios.post("http://localhost:8090/authenticate",LoginCredential).then(function (response) {
            console.log("suppu")
            console.log(response);
            
            dispatch(expire(response.data.emailid))

            localStorage.setItem("emailId",response.data.emailid)
            setSuccess(true)
          })
        // axios.get('http://localhost:8090/users').then(function (response) {
    // handle success
    // console.log(response);
//   })
       
        event.preventDefault();
        
        
    }

    return(
<div>
    ddsv{dummy}
<form onSubmit={forSubmit}>
  <input type="email" value={emailId} placeholder="Email ID" required={true} onChange={(event)=>setEmail(event.target.value)} />
      <input type="text" value={Password1}placeholder="Password" required={true} onChange={(event)=>setPassword1(event.target.value)} />

       <button type="submit" className="btn btn-primary" >Submit</button>
       {success && <Redirect to="/"/>}
     
    </form>
</div>
    );
}

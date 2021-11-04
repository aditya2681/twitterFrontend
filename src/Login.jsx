import React ,{useState}from 'react';
import { Redirect } from 'react-router-dom';


export default function Login(){


 
    const[emailId,setEmail]=useState('');
    const[Password1,setPassword1]=useState('');
    const[error,seterror]=useState(false);
    const[success,setSuccess]=useState(false);


    const forSubmit=(event)=>{
        console.log(emailId)
        setSuccess(true)
        event.preventDefault();
        
        
    }

    return(
<div>
<form onSubmit={forSubmit}>
  <input type="email" value={emailId} placeholder="Email ID" required={true} onChange={(event)=>setEmail(event.target.value)} />
      <input type="text" value={Password1}placeholder="Password" required={true} onChange={(event)=>setPassword1(event.target.value)} />

       <button type="submit" className="btn btn-primary" >Submit</button>
       {success && <Redirect to="/"/>}
     
    </form>
</div>
    );
}

import React ,{useState}from 'react';
import { Redirect } from 'react-router-dom';


export default function Registration(){


    const[firsrtName,setFirstName]=useState('');
    const[lastName,setlastName]=useState('');
    const[emailId,setEmail]=useState('');
    const[Password1,setPassword1]=useState('');
    const[Password2,setPassword2]=useState('');
    const[success,setSuccess]=useState(false);

    const changeFirstName=(event)=>{
        setFirstName(event.target.value)
        // event.preventDefault();
    }
    const forSubmit=(event)=>{
        console.log(firsrtName)
        setSuccess(true)
        event.preventDefault();
        
        
    }

    return(
<div>
<form onSubmit={forSubmit}>
    <input type="text" className="form-control" value={firsrtName} placeholder="First name" required={true} onChange={changeFirstName} />
    <input type="text" value={lastName} placeholder="Last name" required={true} onChange={(event)=>setlastName(event.target.value)} />
  <input type="email" value={emailId} placeholder="Email ID" required={true} onChange={(event)=>setEmail(event.target.value)} />
      <input type="text" value={Password1}placeholder="Password" required={true} onChange={(event)=>setPassword1(event.target.value)} />
      <input type="text" value={Password2} placeholder="Confirm Password" required={true} 
       onChange={(event)=>(
            setPassword2(event.target.value)
       )}/>
       { (Password1!==Password2 &&Password2!=='') && <p>Password doesn't match</p>}
       <button type="submit" className="btn btn-primary" >Submit</button>
       {success && <Redirect to="/"/>}
     
    </form>
</div>
    );
}

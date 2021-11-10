import axios from 'axios';
import React ,{useState}from 'react';
import { Redirect } from 'react-router-dom';



export default function Login(){


 
    const[emailId,setEmail]=useState('');
    const[Password1,setPassword1]=useState('');
    const[errorMessage,seterrorMessage]=useState(false);
    const[success,setSuccess]=useState(false);
    
    


    const forSubmit=(event)=>{
        
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
            
            if(response.data.errormessage){
            
                seterrorMessage(response.data.errormessage)
            }
            else{

            localStorage.setItem("emailId",response.data.emailid)
            localStorage.setItem("isLoggedIn",true)
            setSuccess(true)
            }
          })   
        event.preventDefault(); 
    }

    return(
        <div className="container main">
        <div className="row">
            <div className="col-lg-6 leftChange">

            </div>
            <div className="col-lg-6 rightChange">
                
            <form onSubmit={forSubmit}>
                <label>{errorMessage && errorMessage}</label>
                <div className="forms">
            <input className="form-control" type="email" value={emailId} placeholder="Email ID" required={true} onChange={(event)=>setEmail(event.target.value)} />
            </div>
            <div className="forms">
               <input type="text" className="form-control" value={Password1}placeholder="Password" required={true} onChange={(event)=>setPassword1(event.target.value)} />
               </div>
               <div className="forms">

                <button type="submit" className="btn btn-primary" >Submit</button>
                    </div>
       {success && <Redirect to="/Dashboard"/>}
     
    </form>
                
            </div>
        </div>
        
    </div>

    );
}

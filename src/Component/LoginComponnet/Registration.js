import React ,{useState}from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';


export default function Registration(){

    const regexExp = /^[6-9]\d{9}$/gi;
    const[firsrtName,setFirstName]=useState('');
    const[lastName,setlastName]=useState('');
    const[emailId,setEmail]=useState('');
    const[Password1,setPassword1]=useState('');
    const[Password2,setPassword2]=useState('');
    const[number,setNumber]=useState([]);
    const[success,setSuccess]=useState(false);
    const[validate,setValidate]=useState(false);
    const[errorMessage,seterrorMessage]=useState('');

    const changeFirstName=(event)=>{
        setFirstName(event.target.value)
    }   
    const registerMe=(event)=>{
        console.log(lastName)
        const user = {
            "emailId":emailId,
            "firstName":firsrtName,
             "lastName":lastName,
            "gender":"M",
            "birthDate":"2020-10-02",
            "password":Password1
        }

        
        if(Password1===Password2 && number.match(regexExp)){    
        axios.post("http://localhost:8090/register",user).then(function (response) {
            if(response.data.errormesssage){
                console.log(response.data.errormesssage)
                seterrorMessage(response.data.errormesssage)
            }
            else{
            setSuccess(true)
            }
          })
        }
        event.preventDefault();
        
    } 

    return(
<div>

<div className="container main">
<form onSubmit={registerMe}>
        <div className="row">
           
            <div className="col-lg-12 rightChange">
                
           

        {errorMessage && errorMessage}
    <div className="row">
        <div className="col">
        <div className="forms">
     <input type="text" className="form-control" required value={firsrtName} minlength='4' placeholder="First name" required={true} onChange={changeFirstName} />
     </div>
     </div>
     <div className="col">
     <div className="forms">
      <input type="text" value={lastName} className="form-control" required minlength='4' placeholder="Last name" required={true} onChange={(event)=>setlastName(event.target.value)} />
      </div>
      </div>
      </div>


      <div className="row">
        <div className="col">
        <div className="forms">
     <input type="text" className="form-control" value={number}  placeholder="Contact Number" required={true} onChange={(event)=>{
         setNumber(event.target.value)
     }} />
     <label>{(!regexExp.test(number) && number!='')&& "In correct phone number format"}</label>
     </div>
     </div>
     <div className="col">
     <div className="forms">
     <input type="email" className="form-control" value={emailId}  placeholder="Email ID" required={true} onChange={(event)=>setEmail(event.target.value)} />
      </div>
      </div>
      </div>


     <div className="row">
        <div className="col">
        <div className="forms">
        <input type="text" className="form-control"  value={Password1}placeholder="Password" required={true} onChange={(event)=>setPassword1(event.target.value)} />
      </div>
     </div>
     <div className="col">
     <div className="forms">
     <input type="password" value={Password2} className="form-control" placeholder="Confirm Password" required={true} 
       onChange={(event)=>(
            setPassword2(event.target.value)
       )}/>  </div>
      </div>
      </div>


       <div className="forms">
       { (Password1!==Password2 &&Password2!=='') && <p>Password doesn't match</p>}
      
       </div>
       {success && <Redirect to="/"/>}
     
   
                
            </div>
            
        <button type="submit" className="btn btn-primary" >Submit</button>
        
        </div>
        
        </form>
    </div>
</div>
    );
}



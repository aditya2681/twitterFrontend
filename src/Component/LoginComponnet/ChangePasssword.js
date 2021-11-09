import axios from 'axios';
import React ,{useState}from 'react';
import { Redirect } from 'react-router';


export default function ChangePassword(){

    const[OldPassword,setOldPassword1]=useState('');
    const[Password1,setPassword1]=useState('');
    const[Password2,setPassword2]=useState('');
    const[errorMessage,setErrormessage]=useState('');
    const [success, setSuccess] = useState(false) 
 
    const forSubmit=(event)=>{
        if(Password2!==Password1){
            setErrormessage("Passwords Doesn't match")

        }else{
            const password={
                "emailId": localStorage.getItem("emailId"),
                "oldPassword": OldPassword,
                "newPassword": Password1
            }
            axios.post("http://localhost:8090/changePassword",password).then(function (response) {
                console.log(response.data.errormesssage)
            if(response.data.errormesssage==="Your Old Password is Incorrect"){
            
                setErrormessage(response.data.errormesssage)
            }
            else{
            localStorage.removeItem("emailId")
            localStorage.setItem("isLoggedIn",false)
            setSuccess(true)
            }
          })   
        }
        event.preventDefault();
    }

    return(
        <div className="container main">
        <div className="row">
            <div className="col-lg-6 leftChange">
                <h3 className="changepassword" >Change you Password</h3>
            </div>
            <div className="col-lg-6 rightChange">
                
            <div>
                {errorMessage && errorMessage}
<form onSubmit={forSubmit}>
<div className="forms"> 
    <input type="text" className="form-control"  value={OldPassword} placeholder="Old Password" required={true}
        onChange={(event)=>setOldPassword1(event.target.value)} />
        </div>
        <div className="forms">
      <input type="text" value={Password1} className="form-control" placeholder="Password" required={true} onChange={(event)=>setPassword1(event.target.value)} />
      </div>
      <div className="forms">
      <input type="text" value={Password2} className="form-control" placeholder="Confirm Password" required={true} 
       onChange={(event)=>(
            setPassword2(event.target.value)
       )}/></div>
       { (Password1!==Password2 &&Password2!=='') && <p>Password doesn't match</p>}
       <button type="submit" className="btn btn-primary" >Submit</button>
       {success && <Redirect to="/Login"/>}
     
    </form>
</div>
                
            </div>
        </div>
        
    </div>











    );
}

import React ,{useState}from 'react';


export default function Registration(){

    const[OldPassword,setOldPassword1]=useState('');
    const[Password1,setPassword1]=useState('');
    const[Password2,setPassword2]=useState('');

    const changeFirstName=(event)=>{
        setFirstName(event.target.value)
        // event.preventDefault();
    } 
    const forSubmit=(event)=>{
        console.log(firsrtName)
        event.preventDefault();
    }

    return(
<div>
<form onSubmit={forSubmit}>
    <input type="text" value={OldPassword} placeholder="Old Password" required={true}
        onChange={(event)=>setOldPassword1(event.target.value)} />
      <input type="text" value={Password1}placeholder="Password" required={true} onChange={(event)=>setPassword1(event.target.value)} />
      <input type="text" value={Password2} placeholder="Confirm Password" required={true} 
       onChange={(event)=>(
            setPassword2(event.target.value)
       )}/>
       { (Password1!==Password2 &&Password2!=='') && <p>Password doesn't match</p>}
       <button type="submit">Submit</button>
     
    </form>
</div>
    );
}

import React ,{useState}from "react";
import { data } from "../context/reducer";


function Signup(){

    const [name,setname]=useState("")
    const [email,setemail]=useState("")
    const [password,setpassword]=useState("")
    const [roll,setroll]=useState("")


    let RegesterMe=()=>{

        
        if(name=="" || pass=="" || email =='' || roll == ""){
            console.log("All Fields Required")
        }

else{
    let UserData={
        newName:name,
        newEmail:email,
        newPAss:pass,
        newRoll:roll
        }
       
        dispatch({type: "UPDATE_USER" , payload:UserData})

    }
      

        }
       
return(
 <div style={{border:"2px"}}>
            <input type="text" placeholder="UserName" value={name} onChange={(event)=>{setname(event.target.value)}} ></input><br/>
            <input type="email" placeholder="Email" value={email}  onChange={(event)=>{setemail(event.target.value)}}></input><br/>
            <input type="password" placeholder="Password" value={password}  onChange={(event)=>{setpassword(event.target.value)}}></input><br/>
            <input type="text" placeholder="Trainer/Student"  value={roll}  onChange={(event)=>{setroll(event.target.value)}}></input><br/>
            <button onClick={RegesterMe}> Regester Me    </button><br/>
</div>
    )
}
export default Signup;
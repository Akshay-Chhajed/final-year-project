import React, {useRef,useState} from "react";
import Navbar from "./navbar";
import image1 from "../images/image1.png";
import fire from './config';
import "firebase/auth";
import users from './users.js';
import {Link} from 'react-router-dom';
// import {
//     FirebaseAuthProvider,
//     FirebaseAuthConsumer,
//     IfFirebaseAuthed,
//     IfFirebaseAuthedAnd
//   } from "@react-firebase/auth";
  

// console.log(firebase)
const Account=()=> {
  const [username, setusername] = useState("")
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  // const [retype, setretype] = useState("")
  const goToDashboard=()=>{
    // <Redirect  to="/" />
    console.log("akshay")
}

let LoginForm=useRef(null);
let RegForm=useRef(null);
let Indicator = useRef(null);
const register=()=>{
     console.log(RegForm.current)
        RegForm.current.style.transform="translateX(0px)";
        LoginForm.current.style.transform="translateX(0px)";
        Indicator.current.style.transform="translateX(100px)";
    }
const login=()=>{
    console.log(LoginForm.current)
        RegForm.current.style.transform="translatex(300px)";
        LoginForm.current.style.transform="translatex(300px)";
        Indicator.current.style.transform="translatex(0px)";
    }

 const signUpWithEmailandPass=(email,password,username)=>{
        fire.auth().createUserWithEmailAndPassword(email, password).then((userCredential)=>{
            let user = userCredential.user;
            console.log(user);
            console.log(user.uid);
            console.log(user.email);
            let newuser = new users();

            // newuser(user.uid,user.email,"",username,"");
            // console.log(user.profileURL);
            newuser.setId(user.uid)
            newuser.setEmail(user.email)
            newuser.setDisplayName(username)
            newuser.setPhoneNumber("")
            newuser.setImageURL("")
            console.log(newuser);
            createNewUser(newuser,goToDashboard);
        }).catch((error) => {
            var errorCode = error.code;
            console.log(errorCode);
            var errorMessage = error.message;
            console.log(errorMessage);
        });
    }    

   const createNewUser=(user,callback)=>{
        //TODO check if user exist
        // console.log(user)
          let json = JSON.stringify(user);
            console.log(json);
          let database = fire.database().ref();
      
          database.child('Users').child(user.getId()).set(JSON.parse(json),function(error){
            if(error){
              alert("Data could not be saved." + error);
            } else {
              callback();
            }
          });
        }
    // const authcheck=()=>{
    //   console.log(username);
    //   console.log(password);
    //   console.log(email);
    // }
   
  // useEffect(() => {
  //   // authcheck();
  // }, [])
    
  return (
      <div>
          <Navbar/>
          <div className="account-page">
    <div className="container">
        <div className="row">
            <div className="col-2">
                <img src={image1} width="100%" alt="image1"/>
            </div>
            <div className="col-2">
                <div className="form-container">
                    <div className="form-btn">
                        <span onClick={login}>Login</span>
                        <span onClick={register}>Register</span>
                        <hr id="Indicator" ref={Indicator}/>
                    </div>
                    <form id="LoginForm" ref={LoginForm}>
                        <input  type="text" placeholder="Username"/>
                        <input  type="password" placeholder="Password"/>
                        <button type="submit" className="btn">Login</button>
                        <Link to="/Forgot">Forget password?</Link>
                    </form>
                    <form id="RegForm" ref={RegForm} onSubmit={()=>(signUpWithEmailandPass(email,password,username))}>
                        <input id="username" type="text" placeholder="Username" onChange={(e)=>setusername(e.target.value)}/>
                        <input id="email" type="email" placeholder="Email" onChange={(e)=>setemail(e.target.value)}/>
                        <input id="password" type="password" placeholder="Password" onChange={(e)=>setpassword(e.target.value)}/>
                        <button type="submit" className="btn">Register</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
 </div>
      
            );
} 

export default Account;

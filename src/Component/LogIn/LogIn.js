import React, { useContext } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { userContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
const LogIn = () => {
    const [logInUser,setLogInUser] = useContext(userContext)
    const history = useHistory();
    const location = useLocation();

    const { from } = location.state || { from: { pathname: "/" } };

    if(firebase.apps.length===0){
        firebase.initializeApp(firebaseConfig);
    }
    const handleGoogleSignIn=()=>{
   var provider = new firebase.auth.GoogleAuthProvider();
       firebase.auth().signInWithPopup(provider).then(function(result) {
     const {displayName, email} = result.user;
     const signInUser = {name:displayName,email}
     console.log(signInUser)
     setLogInUser(signInUser)
      history.replace(from)
  // ...
}).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  // ...
}); 
    }
    return (
        <div style={{border:"1px solid blue", width:"300px",height:"300px",textAlign:"center",borderRadius:"15px", padding:"15px", position:"relative",left:"400px",marginTop:"60px" }}>
            <h1>Log in with</h1>
            <button  onClick={handleGoogleSignIn}>Sign in with google</button>
            <h1>{logInUser.name} </h1>
        </div>
    );
};

export default LogIn;
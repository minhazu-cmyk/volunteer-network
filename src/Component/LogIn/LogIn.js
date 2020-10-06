import React from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
const LogIn = () => {
    firebase.initializeApp(firebaseConfig);
    const handleGoogleSignIn=()=>{
   var provider = new firebase.auth.GoogleAuthProvider();
       firebase.auth().signInWithPopup(provider).then(function(result) {
      var user = result.user;
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
        </div>
    );
};

export default LogIn;
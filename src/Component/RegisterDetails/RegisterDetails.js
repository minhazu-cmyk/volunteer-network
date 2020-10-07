import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../../App';


const RegisterDetails = () => {
    const[register, setRegister] = useState([]);
    const [logInUser, setLogInUser] = useContext(userContext);
    useEffect(()=>{
        fetch('http://localhost:5000/register?email='+ logInUser.email)
        .then(res=>res.json())
        .then(data=>setRegister(data))
    },[])
    return (
        <div>
            <h1> ami {register.length} </h1>
           {
               register.map(x=> <li> name: {x.name}  email:{x.email} </li>)
           } 
        </div>
    );
};

export default RegisterDetails;

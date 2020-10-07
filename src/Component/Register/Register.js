  
import React from 'react';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { userContext } from '../../App';
import './Register.css';
import { useHistory } from 'react-router-dom';


const Register = () => {

    const [logInUser, setLogInUser] = useContext(userContext);
    const { register, handleSubmit, watch, errors } = useForm();
    // const onSubmit = data => console.log("form submitted", data);
  
    console.log(watch("example")); // watch input value by passing the name of it
    const history = useHistory();
    const onSubmit =()=>{
       history.push('/details')
      const newRegister = {...logInUser};
          
     fetch("http://localhost:5000/addRegister",{
       method:"POST",
       headers: {'content-Type': 'application/json'},
       body:JSON.stringify(newRegister)
    })
   
  .then(res=>res.json)
  .then(data=>{
    console.log(data)
  })
  
    }
  
    return (
      <div>
      <form className="ship-form" onSubmit={handleSubmit(onSubmit)}>
     <input name="name" defaultValue={logInUser.name} ref={register({ required: true })} placeholder="your name" />
       {errors.name && <span className="error" >name field is required</span>}
      
       <input name="email" defaultValue={logInUser.email} ref={register({ required: true })} placeholder="your email" />
       {errors.email && <span className="error" >email field is required</span>}

       <input name="Date"  ref={register({ required: true })} placeholder="DD/MM/yyy" />
       {errors.Date && <span className="error" >Date is required</span>}

       <input name="description" ref={register({ required: true })} placeholder="description" />
       {errors.description && <span className="error" > address field is required</span>}

       <input name="email" ref={register({ required: true })} placeholder="Organization" />
       {errors.email && <span className="error" >email field is required</span>}
        <input  type="submit" value="Registration" />
      
      </form>

      </div>
    );
};

export default Register;
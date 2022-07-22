import React, { useState,useEffect } from 'react'
import {login} from './features/userSlice'
import { useDispatch } from 'react-redux'
import { selectUser } from './features/userSlice'
import { useSelector } from 'react-redux'
import Logout from './Logout'
import {Link} from 'react-router-dom'

const Login = () => {

    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")

    useEffect(function(){
      fetch("http://localhost:8000/user")
         .then(function(response){
          console.log(response)
           return response.json();
        })
         .then(function(data){
           console.log(data);
        })
         .catch(function(err){
           console.log(err);
        });
     },[]);

    const dispatch=useDispatch();

    const handleSubmit=async function(e){
       e.preventDefault();
       await saveToServer();
       setEmail("")
       setPassword("")
      //  dispatch(login({
      //   email:email,
      //   password:password,
      //   loggedIn:true
      //  }))
      } 

    function saveToServer()
    {
      let data={
        email:email,
        password:password
       }
       dispatch(login({
        email:email,
        password:password,
        loggedIn:true
       }))
      return fetch("http://localhost:8000/user",{
        method:"POST",
        body:JSON.stringify({user:data}),
        headers:{
          "Content-Type":"application/json",
       }
      })
     
    }
    const user=useSelector(selectUser);
  return (
    <>
    {user?(   
      <Logout/>
    ):(
      <>
      <form onSubmit={(e)=>handleSubmit(e)}>
      <h1>Login here </h1>

      <input type="email"
      placeholder='Email'
      value={email}
      onChange={(e)=>{
          setEmail(e.target.value)
      }}  
      required={true}
        />
      <input type="password" 
      placeholder='password' 
      value={password}
      onChange={(e)=>{
          setPassword(e.target.value)
      }} 
      required={true}
      />
     <button type='submit' >Submit</button>
  </form>
     <Link to="/home">
     <button >Home</button>
     </Link>
  </>
    )}
    </>
  
  )
}

export default Login
import React, { useState,useEffect } from 'react'
import {login} from './features/userSlice'
import { useDispatch } from 'react-redux'
import { selectUser } from './features/userSlice'
import { useSelector } from 'react-redux'
import Logout from './Logout'
import {Link} from 'react-router-dom'
import { Button, Card, Form } from 'react-bootstrap';



const Login = () => {

    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [fetchData,setFetchData]=useState({});

    useEffect(function(){
      fetch("http://localhost:8000/user")
         .then(function(response){
          console.log(response)
           return response.json();
        })
         .then(function(data){
           console.log(data);
           setFetchData(data);
        })
         .catch(function(err){
           console.log(err);
        });
     },[]);

    const dispatch=useDispatch();
    // for(let i=0;i<fetchData.length;i++)
    // {
    //     console.log(fetchData[i].email)
    // }
    const handleSubmit=async function(e){
       e.preventDefault();
       await verifyFromServer();
       setEmail("")
       setPassword("")
      } 

    function verifyFromServer()
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
      <Form onSubmit={(e)=>handleSubmit(e)}>
      <h1>Login here </h1>

      <Form.Control type="email"
      placeholder='Email'
      value={email}
      onChange={(e)=>{
          setEmail(e.target.value)
      }}  
      required={true}
        />
      <Form.Control type="password" 
      placeholder='password' 
      value={password}
      onChange={(e)=>{
          setPassword(e.target.value)
      }} 
      required={true}
      />
     <Button variant="primary mb-3" type='submit' >Submit</Button>
  </Form>
     <Link to="/home">
     <Button variant="dark" >Home</Button>
     </Link>
  </>
    )}
    </>
  
  )
}

export default Login
import React,{useState} from 'react'
import {Link } from 'react-router-dom'
import {Form ,Button} from 'react-bootstrap'
import '../App.css'


const Register = () => {

  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [name,setName]=useState("")
  const [repeatPass,setRepeatPass]=useState("")


const handleSubmit=async function(e){
  e.preventDefault();
  await saveToServer();
  setEmail("")
  setPassword("")
  setName("")
  setRepeatPass("")
  } 

  function saveToServer()
  {
    let data={
      username:name,
      email:email,
      password:password,
      repeatPass:repeatPass
     }
    return fetch("http://localhost:8000/register",{
      method:"POST",
      body:JSON.stringify(data),
      headers:{
        "Content-Type":"application/json",
     }
    })
   
  }

  return (
    <div >
    <Form onSubmit={(e)=>handleSubmit(e)}>
        <h1>Register here </h1>

        <Form.Control type="email"
        placeholder='Email'
        value={email}
        onChange={(e)=>{
            setEmail(e.target.value)
        }}
         required={true}  
          />
        <Form.Control type="text"
        placeholder='Name'
        value={name}
        onChange={(e)=>{
            setName(e.target.value)
        }}
         required={true}  
          />
        <Form.Control type="password" 
        placeholder='Password' 
        value={password}
        onChange={(e)=>{
            setPassword(e.target.value)
        }}
         required={true} 
        />
         <Form.Control type="text"
        placeholder='Confirm Password'
        value={repeatPass}
        onChange={(e)=>{
            setRepeatPass(e.target.value)
        }}
         required={true}  
          />
        
       <Button variant="primary mb-3"type='submit' >Submit</Button>
    </Form>
     

    <Link to="/home">
     <Button  variant="dark" >Home</Button>
     </Link>
     

   
</div>
  )
}

export default Register
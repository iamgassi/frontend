import React,{useState} from 'react'
import {Link } from 'react-router-dom'
import style from '../components/Style.module.css'
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
    <div className={style.box}>
    <form onSubmit={(e)=>handleSubmit(e)}>
        <h1>Register here </h1>

        <input type="email"
        placeholder='Email'
        value={email}
        onChange={(e)=>{
            setEmail(e.target.value)
        }}
         required={true}  
          />
        <input type="text"
        placeholder='Name'
        value={name}
        onChange={(e)=>{
            setName(e.target.value)
        }}
         required={true}  
          />
        <input type="password" 
        placeholder='Password' 
        value={password}
        onChange={(e)=>{
            setPassword(e.target.value)
        }}
         required={true} 
        />
         <input type="text"
        placeholder='Confirm Password'
        value={repeatPass}
        onChange={(e)=>{
            setRepeatPass(e.target.value)
        }}
         required={true}  
          />
        
       <button type='submit' >Submit</button>
    </form>

    <Link to="/home">
     <button >Home</button>
     </Link>

     <div className='wave -one'></div>
   <div className='wave -two'></div>
   <div className='wave -three'></div>
</div>
  )
}

export default Register
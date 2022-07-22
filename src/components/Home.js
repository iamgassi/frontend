import React from 'react'
import {Link} from 'react-router-dom'
import style from '../components/Style.module.css'
import '../App.css'


const Home = () => {
  return (
    <div className={style.box} >
        <div className={style.inputData}>
      <Link to="/login">
            <button  >Login</button>
      </Link>  
       <Link to="/register">
             <button>Register</button>
       </Link>
       </div>

       <div className='wave -one'></div>
   <div className='wave -two'></div>
   <div className='wave -three'></div>

    </div>
  )
}

export default Home
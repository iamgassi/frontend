import React from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux/es/exports';
import { logout, selectUser } from './features/userSlice';

const Logout = () => {
    const user=useSelector(selectUser)
    const dispatch=useDispatch();

    const handleLogout=(e)=>{
       e.preventDefault();

         dispatch(logout(
         ))
    }
  return (
    <>
     <h1>
        Welcome <span>{user.email}</span>
     </h1>
      <button onClick={(e)=>handleLogout(e)}>Logout</button>
    </>
  )
}

export default Logout
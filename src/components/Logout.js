import React from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux/es/exports';
import { logout, selectUser } from './features/userSlice';
import { Button } from 'react-bootstrap';

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
        Welcome <span>{user.username}</span>
     </h1>
      <Button variant="danger mb-3" onClick={(e)=>handleLogout(e)}>Logout</Button>
    </>
  )
}

export default Logout
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {
  toggleDarkMode,
  setFullName,
  setEmail,
  setToken,
  setRole,
  setUser_id,
} from '../Redux/AuthSlice/AuthSlice';
const Auth = () => {
    const dispatch = useDispatch();
    const auth = useSelector((state) => state.auth);
  
    const handleLogout = () => {
      dispatch(setFullName(''));
      dispatch(setEmail(''));
      dispatch(setToken(''));
      dispatch(setRole(''));
      dispatch(setUser_id(''));
    };
  
    const handleToggleDarkMode = () => {
      dispatch(toggleDarkMode());
    }
  return (
    <div>
        <h1>Count: {auth.token}</h1>
        <button onClick={handleLogout}>Logout</button>
        <button onClick={handleToggleDarkMode}>Toggle Dark Mode</button>
    </div>
  )
}

export default Auth
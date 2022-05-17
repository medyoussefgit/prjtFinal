import React from 'react'
import { useSelector } from 'react-redux';


const DashbooardAdmin = () => {
  const currentUser = useSelector((state) => state.userReducer.currentUser);
  
  return (
    <div>
        <h1> "Welcome " + {currentUser && currentUser.fullName} </h1>
    </div>
  )
}

export default DashbooardAdmin
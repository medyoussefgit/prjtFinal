import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllDemandeClient } from '../../../redux/actions/demandeaction';


const DashboardClient = () => {
  const currentUser = useSelector((state) => state.userReducer.currentUser);
  console.log(currentUser)
  const dispatch = useDispatch();
  useEffect(() => {
    
    dispatch(getAllDemandeClient());
  }, [dispatch]);
  return (
    <div>
        <h1> {`Welcome ${currentUser && currentUser.fullName}`}  </h1>
    </div>
  )}

export default DashboardClient
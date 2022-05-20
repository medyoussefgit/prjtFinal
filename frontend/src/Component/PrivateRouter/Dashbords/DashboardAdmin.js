import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllDemande } from '../../../redux/actions/demandeaction';


const DashbooardAdmin = () => {
  const currentUser = useSelector((state) => state.userReducer.currentUser);
  const dispatch = useDispatch();
  useEffect(() => {
    
    dispatch(getAllDemande());
  }, [dispatch]);
  
  return (
    <div>
        <h1> "Welcome " + {currentUser && currentUser.fullName} </h1>
    </div>
  )
}

export default DashbooardAdmin
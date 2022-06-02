
import { useEffect } from 'react';
import { Route, Routes } from 'react-router';
// import { Link } from 'react-router-dom';
import './App.css';
 import SignIn from './Component/Auth/SignIn';
 import SignUp from './Component/Auth/SignUp'
import Home from './Component/home/Home';

// import NavigationBar from './Component/navbar/NavigationBar';
import PrivateRoute from './Component/PrivateRouter';
import DashbooardAdmin from './Component/PrivateRouter/Dashbords/DashboardAdmin';
import DashboardClient from './Component/PrivateRouter/Dashbords/DashboardClient';
import AddProduct from './Component/Product/AddProduct';
import ProductList from './Component/Product/ProductList';
import { getAllProducts } from './redux/actions/productaction';
 import { useDispatch } from "react-redux";
import ADDDemande from './Component/PrivateRouter/demande/ADDDemande';
import { getUser } from './redux/actions/useraction';
// import Navbar from './Component/navbar/NavBar';
 import Navig from './Component/navbar/Navig';
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    getUser()
    dispatch(getAllProducts());
  }, [dispatch]);

  return (
    
    <div className="App">
    <Navig/>
   
   
    <Routes>
    <Route path="/register" element={<SignUp />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/" element={<Home />} />
        <Route
          path="/dachboardClient"
          element={
            <PrivateRoute>
              <DashboardClient />
            </PrivateRoute>
          }
        />
        <Route
          path="/dachboardAdmin"
          element={
            <PrivateRoute>
              <DashbooardAdmin />
            </PrivateRoute>
          }
        />

        <Route
          path="/productList"
          element={
           
              
              <ProductList />
            
          }
        />
        <Route
          path="/addProduct"
          element={
            <PrivateRoute>
              <AddProduct />
            </PrivateRoute>
          }
        />
        <Route
          path="/adddemande"
          element={
            <PrivateRoute>
              <ADDDemande />
            </PrivateRoute>
          }
        />
        </Routes>    
    
    </div>
  );
}

export default App;

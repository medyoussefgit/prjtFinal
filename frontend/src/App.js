
import { Route, Routes } from 'react-router';
import './App.css';
 import SignIn from './Component/Auth/SignIn';
 import SignUp from './Component/Auth/SignUp'
import Home from './Component/home/Home';

import NavigationBar from './Component/navbar/NavigationBar';
import PrivateRoute from './Component/PrivateRouter';
import DashbooardAdmin from './Component/PrivateRouter/Dashbords/DashboardAdmin';
import DashboardClient from './Component/PrivateRouter/Dashbords/DashboardClient';
//  import { useDispatch } from "react-redux";
function App() {
  return (
    
    <div className="App">
<NavigationBar/>
    
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
        </Routes>    
    
    </div>
  );
}

export default App;

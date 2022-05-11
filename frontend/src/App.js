
import { Route, Routes } from 'react-router';
import './App.css';
 import SignIn from './Component/Auth/SignIn';
 import SignUp from './Component/Auth/SignUp'
import Home from './Component/home/Home';
 import NavBar from './Component/navbar/NavBar'
function App() {
  return (
    <div className="App">
    <NavBar/>
    
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/login" element={<SignIn />} />
        </Routes>    
    
    </div>
  );
}

export default App;


import {React, useState, useContext} from 'react';
import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Sidebar from './components/sidemenu/SideMenu';
import Home from './pages/Home';
import Course from './pages/Course';
import BomberBuddy from './pages/BomberBuddy';
import Login from './components/login/Login';
import Discussion from './pages/Discussion';
import Profile from './pages/Profile';
import CardDetail from './pages/CardDetail';
import makeAuth from "./doAuth";
import { AuthContext, AuthProvider } from "./authContext";
import ProtectedRoute from "./Protected";


export default function App() {
  return (
    <AuthProvider>
      <MainApp />
    </AuthProvider>
  );
}

function MainApp() {
  const [ token, setToken ] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (name, pass) => {
    const validLett = /^[a-zA-Z0-9]+$/;

    if (!validLett.test(name) || !validLett.test(pass)) {
      alert("Invalid username or password format " + name + ", " + pass);
      return;
    }

    const newToken = await makeAuth(name, pass);
    console.log("handlelogin newToken: " );
    console.log(newToken);
    if (newToken[0].full_name !== "fail") {
      setToken(newToken[0].account);
      alert("Login got: " + newToken[0].account);
      navigate('/home');
    } else {
      alert("Login failed");
    }
  };

  const handleLogout = () => {
    setToken(null);
    navigate('/');
  };

  return (
    <div className="app-container">
      <Sidebar token={token} onLogout={handleLogout} />
     
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home onLogin={handleLogin} />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          {/* <Route path="/home" element={<Login token={token} onLogin={handleLogin} />} /> */}

          <Route path="/home" element={<ProtectedRoute value={ token }><Home /></ProtectedRoute>} />

          <Route path="/course" element={<ProtectedRoute value={ token }><Course /></ProtectedRoute>}>       
          </Route>

          <Route path="/course/:courseId" element={<ProtectedRoute value={ token }><CardDetail /></ProtectedRoute>} />

          <Route path="/bomber-buddy" element={<ProtectedRoute value={ token }><BomberBuddy account={token} aType="COMP171"/></ProtectedRoute>} />
          
          {/* <Route path="/bomber-buddy" element={<BomberBuddy account={token} aType="COMP171"/>} /> */}
        
          <Route path="/help" element= {<Home />} />
       
          <Route path="/profile" element={<ProtectedRoute value={ token }><Profile /></ProtectedRoute>} />
      
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </div>
    </div>
  );
}

// Page not found
const NoMatch = () => (
  <>
    <h1>404</h1>
    Page not found.
  </>
);
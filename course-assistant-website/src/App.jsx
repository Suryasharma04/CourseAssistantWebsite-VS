
import {React, useState} from 'react';
import './App.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Sidebar from './components/sidemenu/SideMenu';
import Home from './pages/Home';
import Course from './pages/Course';
import BomberBuddy from './pages/BomberBuddy';
import Discussion from './pages/Discussion';
import Profile from './pages/Profile';
import CardDetail from './pages/CardDetail';
import makeAuth from "./doAuth";
import { AuthContext } from "./authContext";
import ProtectedRoute from "./Protected";

export default function App() {
  const [token, setToken] = useState(null);

  const navigate = useNavigate();

  const handleLogin = async (name, pass) => {
    /* This is a regular expression that matches if a string */
    /* is NOT a lower/upper case letter or a number */
    const validLett = /^[a-zA-Z0-9]+$/;

      console.log("handleLogin, name is " + name + " and valid is " + validLett.test(name));

    if (!validLett.test(name)){
        setToken("fail"); // there is a character that is NOT a-zA-Z0-9 in the name
    }
    else if (!validLett.test(pass)){
        setToken("fail"); //there is a character that is NOT a-zA-Z0-9 in the password
    }
    else{
      const newToken = await makeAuth(name, pass);
      if (newToken[0].full_name !== "fail"){
        setToken(newToken[0].account);
        navigate('/assistant1');
      }
      else{
        setToken("fail");
      }
    }
  };

  const handleLogout = () => {
    setToken(null);
  };

  return (
    <AuthContext.Provider value={token}>


    <div className="app-container">
    <Sidebar />
    <div className="main-content">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/course" element={ <Course onLogin={handleLogin} /> } />
        <Route path="/bomber-buddy" element={<BomberBuddy />} />
        <Route path="/discussion" element={<Discussion />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/card/:id" element={<CardDetail />} />
        
        <Route path="/bomber-buddy" element={
              <ProtectedRoute value = {token}>
                <BomberBuddy /> 
              </ProtectedRoute>
            }
          />


      </Routes>
    </div>
  </div>

  </AuthContext.Provider>
  );
}

// Page not found
const NoMatch = () => (
  <>
    <h1>404</h1>
    Page not found.
  </>
  );

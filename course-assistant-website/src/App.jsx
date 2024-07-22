import {React, useState, useContext} from 'react';
import './App.css';
import { Route, Routes, useNavigate, Navigate} from 'react-router-dom';
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
import ProfileComponent from './pages/ProfileComponent';
import EditProfile from './pages/EditProfile';
import Help from './pages/Help';

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
    navigate('/login');
  };

  return (
    <div className="app-container">
      {/* <Sidebar token={token} onLogout={handleLogout} /> */}
      {token && <Sidebar token={token} onLogout={handleLogout} />}

      <Routes>
      <Route path="/login" element={<Login onLogin={handleLogin} />} />
      </Routes>
     
      <Routes>
            <Route  path="/editprofile" element={<EditProfile  ptoken = {token} />} />
      </Routes>

      <div className="main-content">
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />

          {/* <Route path="/" element={<Home onLogin={handleLogin} />} /> */}
          {/* <Route path="/login" element={<Login onLogin={handleLogin} />} /> */}

          {/* <Route path="/home" element={<Login token={token} onLogin={handleLogin} />} /> */}

          <Route path="/home" element={<ProtectedRoute value={ token }><Home /></ProtectedRoute>} />

          <Route path="/course" element={<ProtectedRoute value={ token }><Course /></ProtectedRoute>} />       

          <Route path="/course/:courseId" element={<ProtectedRoute value={ token }><CardDetail /></ProtectedRoute>} />

          <Route path="/bomber-buddy" element={<ProtectedRoute value={ token }><BomberBuddy account={token} aType="COMP171"/></ProtectedRoute>} />
          
          {/* <Route path="/bomber-buddy" element={<BomberBuddy account={token} aType="COMP171"/>} /> */}

          <Route path="/discussion" element= {<ProtectedRoute value={ token }><Discussion /></ProtectedRoute>}  />

          <Route path="/help" element= {<Help />} />
          <Route path="/profilecomponent" element={<ProtectedRoute value={ token }><ProfileComponent ptoken = { token} /></ProtectedRoute>} />
          {/* <Route path="/profilecomponent" element={<ProfileComponent />}/> */}

          <Route path="*" element={<NoMatch />} />
        </Routes>
      </div>
    </div>
  );
}

// Page not found
const NoMatch = () => (
  <>
    {/* <h1>404</h1>
    Page not found. */}
  </>
);
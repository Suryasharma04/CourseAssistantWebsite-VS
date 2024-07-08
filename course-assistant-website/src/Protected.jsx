import { Navigate } from 'react-router-dom';
import { AuthContext } from './authContext';

//import { useContext } from "react";

const ProtectedRoute = ({ value, children }) => {
  //const token  = useContext(AuthContext);

  if (!value) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
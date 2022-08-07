import React from "react";
import { Navigate, Route } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Quote from "../Quote";

export default function ProtectedRoute({ children }) {
  const { currentUser } = useAuth();

  return (<>
  
  {currentUser ? children : <Navigate to="/login" />}
    <Route exact path='/quote' element={<Quote />} />
  </>)
}


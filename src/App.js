import "./App.css";
import Nav from "./components/Nav";
import Signup from "./components/SignUp";
import Quote from "./components/Quote";
import Login from "./components/Login";
import { Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import { AuthProvider } from "./components/contexts/AuthContext";
// import ProtectedRoute from "./components/PrivateRoute";
import ForgotPassword from "./components/ForgotPassword";
import UpdateProfile from "./components/UpdateProfile";
import React from "react";

function App() {
  return (
    <>
      <div className="nav-items">
        <Nav />
      </div>
      <div>
        <Container
          style={{ minHeight: "100vh " }}
        >
          <div className="w-screen">
            <AuthProvider>
              <Routes>
                <Route path="/quote" element={<Quote />}></Route>
                <Route
                  path="/update-profile"
                  element={<UpdateProfile />}
                ></Route>
                <Route path="/" element={<Signup />}></Route>
                <Route path="/signup" element={<Signup />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route
                  path="/forgot-password"
                  element={<ForgotPassword />}
                ></Route>
              </Routes>
            </AuthProvider>
          </div>
        </Container>
      </div>
    </>
  );
}

export default App;

//  https://opentdb.com/api.php?amount=10

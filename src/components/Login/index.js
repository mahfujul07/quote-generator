import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login, googleSignIn, githubSignIn } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      navigate("/quote");
    } catch {
      setError("Failed to sign in");
    }
    setLoading(false);
  }

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();

    try {
      await googleSignIn();
      navigate("/quote");
    } catch (err) {
      setError(err.message);
    }
  };
  const handleGithubSignIn = async (e) => {
    e.preventDefault();

    try {
      await githubSignIn();
      navigate("/quote");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <Card className="d-flex justify-center" style={{ maxWidth: "400px " }}>
        <Card.Body>
          <h2 className="text-center mb-4">Log In</h2>
          {error && <Alert varient="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Button disabled={loading} className="w-100 mt-3" type="submit">
              Log In
            </Button>
          </Form>
          <div className="w-100 text-center mt-3">
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Need an account? <Link to="/signup">Sign Up</Link>
      </div>
      <div className="mt-5">
        <div className="text-center">
          <p className="text-sm leading-5 text-gray-500">Or Sign in with</p>
        </div>
        <div className="mt-5">
          <button
            type="button"
            className="flex items-center justify-center w-full p-3 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 bg-opacity-10 hover:bg-opacity-20"
            onClick={handleGoogleSignIn}
          >
            <FcGoogle size={30} />
            <span
              className="ml-3 text-indigo-700 font-semibold"
              disabled={loading}
              to="/quote"
            >
              Continue With Google
            </span>
          </button>
        </div>
        <div className="mt-5">
          <button
            type="button"
            className="flex items-center justify-center w-full p-3 border border-transparent text-sm font-medium rounded-md bg-indigo-600 hover:bg-indigo-700 bg-opacity-10 hover:bg-opacity-20 focis:outline-none"
            onClick={handleGithubSignIn}
          >
            <BsGithub size={30} />
            <span
              className="ml-3 text-indigo-700 font-semibold"
              disabled={loading}
              to="/quote"
            >
              Continue With GitHub
            </span>
          </button>
        </div>
      </div>
    </>
  );
}

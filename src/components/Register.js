import React, { useState } from "react";
import { Form, Alert } from "react-bootstrap";
import Login from "./Login";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [flag, setFlag] = useState(false);
  const [login, setLogin] = useState(true);

  function handleSubmit(e) {
    e.preventDefault();
    if (!name || !email || !password) {
      setFlag(true);
    } else {
      setFlag(false);
      localStorage.setItem("Email", JSON.stringify(email));

      localStorage.setItem("Password", JSON.stringify(password));
      console.log("Saved in Local storage");
      setLogin(!login);
    }
  }

  function handleClick() {
    setLogin(!login);
  }

  return (
    <div className="p-4">
      {login ? (
        <form onSubmit={handleSubmit}>
          <h1>Register</h1>
          <div className="form-group">
            <label>Name:</label>
            <input
              className="form-control"
              type="text"
              placeholder="Enter Full Name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Email:</label>
            <input
              className="form-control"
              type="email"
              placeholder="Enter Your Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Password:</label>
            <input
              className="form-control"
              type="password"
              placeholder="Enter Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-dark btn-lg btn-block ">
            Register
          </button>
          <p className="forget-password text-right" onClick={handleClick}>
            Already Register Click here to login ?
          </p>

          {flag && (
            <Alert color="primary" variant="danger">
              I got it you are in hurry! But every Field is important!
            </Alert>
          )}
        </form>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default Register;

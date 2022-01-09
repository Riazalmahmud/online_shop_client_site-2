import "./Login.css";
import { Button, Form } from "react-bootstrap";
import { useState } from "react";
import { NavLink, useHistory, useLocation } from "react-router-dom";
import Alert from "@mui/material/Alert";
import useAuth from "../../Hooks/useAuth";
const Login = () => {
  const [loadData, setLoadData] = useState({});
  const {
    user,
    googleSignIn,
    facebookSignIn,
    isloading,
    authError,
    signInEmailPassword,
  } = useAuth();

  let location = useLocation();
  let history = useHistory();

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newData = { ...loadData };
    newData[field] = value;
    setLoadData(newData);
  };

  const handleSubmitLogin = (e) => {
    signInEmailPassword(loadData.email, loadData.password, location, history);
    e.preventDefault();
    e.target.reset();
    console.log(e);
  };
  return (
    <div>
      <div className="container my-5">
        <div className="login-form shadow-lg p-3 mb-5 bg-body rounded w-50">
          <h2>
            Log <span>In</span>
          </h2>
          {!isloading && (
            <form onSubmit={handleSubmitLogin} className="login-design">
              <Form.Label className="login-form-design">
                {" "}
                Enter Email
              </Form.Label>
              <Form.Control
                placeholder="Enter email"
                className="bg-transparent"
                name="email"
                type="email"
                onBlur={handleOnBlur}
              />
              <Form.Label className="login-form-design">
                Enter password
              </Form.Label>
              <Form.Control
                placeholder="Enter password"
                className="bg-transparent"
                name="password"
                type="password"
                onBlur={handleOnBlur}
              />

              <button type="submit"> Login</button>
            </form>
          )}

          <p className="my-3">or signIn</p>
          <i className="fab fa-facebook-f" onClick={facebookSignIn}></i>
          {/* <i className="fab fa-twitter"></i> */}
          <i className="fab fa-google-plus-g" onClick={googleSignIn}></i>
          <br />
          <NavLink style={{ textDecoration: "none" }} to="/register">
            <Button variant="text">New User? Please Register</Button>
          </NavLink>
          {isloading && <h1>Loading...</h1>}
          {user?.email && <Alert severity="success">Successfully login </Alert>}
          {authError && (
            <Alert severity="error">
              {authError} sorry ! already created account{" "}
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;

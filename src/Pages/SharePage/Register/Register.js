import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';
import { Link, useHistory } from "react-router-dom";
import Alert from '@mui/material/Alert';
const Register = () => {
    const [registerLoad, setRegisterLoad] = useState({});
    const { registerUser, googleSignIn, facebookSignIn, user, isloading, authError } = useAuth();
    let history = useHistory();

    const handleOnBlur = e => {
        const field = e.target.name
        const value = e.target.value;
        const newData = { ...registerLoad }
        newData[field] = value;
        setRegisterLoad(newData)
    }
    const handleSubmi = e => {

        if (registerLoad.password !== registerLoad.password2) {
            <Alert severity="warning">password din't match !</Alert>
            return
        }
        registerUser(registerLoad.email, registerLoad.password, registerLoad.name, history)
        e.preventDefault();
        e.target.reset();
    };
    return (
        <div>

            <div className="container my-5">

                <div className="login-form shadow-lg p-3 mb-5 bg-body rounded w-50">
                    <h2>Sign <span>Up</span></h2>
                    {!isloading && <form onSubmit={handleSubmi} className='login-design'>
                        <Form.Label className="login-form-design"> Enter Name</Form.Label>
                        <Form.Control type="text" name="name" onBlur={handleOnBlur} placeholder="Enter Name" className="bg-transparent" />
                        <Form.Label className="login-form-design"> Enter Email</Form.Label>
                        <Form.Control type="email" name="email" onBlur={handleOnBlur} placeholder="Enter email" className="bg-transparent" />
                        <Form.Label className="login-form-design">Enter password</Form.Label>
                        <Form.Control type="password" name="password" onBlur={handleOnBlur} placeholder="Enter password" className="bg-transparent" />
                        <Form.Label className="login-form-design">Enter conform password</Form.Label>
                        <Form.Control type="password" name="password2" onBlur={handleOnBlur} placeholder="Enter password" className="bg-transparent" />

                        <button type="submit"> Register</button>
                    </form>}
                    <p className="my-3">or signUp</p>
                    <i class="fab fa-facebook-f" onClick={facebookSignIn}></i>
                    {/* <i class="fab fa-twitter"></i> */}
                    <i class="fab fa-google-plus-g" onClick={googleSignIn}></i>
                    <br />
                    <p className="my-5 text-center"> Already have an account? <Link to="/Login">Login now.</Link> </p>

                    {isloading && <h1>Loading...</h1>}
                    {user?.email && < Alert severity="success" > Successfully Registration </Alert >
                    }
                    {authError && <Alert severity="error">{authError} sorry ! already created account </Alert>}
                </div>
            </div>
            <h1>Register page </h1>


        </div>
    );
};

export default Register;
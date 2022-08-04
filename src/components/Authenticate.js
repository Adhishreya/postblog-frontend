import React, { useRef, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { loginService, registerService } from '../services/userService';

const Form = styled.form`
width: 70%;
margin:2rem auto;
padding: 1rem;
background-color: #64748b;
display: flex;
flex-direction: column;

`
const Input = styled.input`
border: none;
background-color: transparent;
outline: none;
border-bottom: 0.1rem solid #d1d5db;
height: 2rem;
padding: 1rem 0rem;
margin-bottom: 2rem;
color:aliceblue;
font-size:1rem;
`;

const PasswordField = styled(Input)`
width:90%;

`

const InputFlex = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
`;

const Label = styled.label`
text-align: start;
margin:1rem 0rem;
font-size: 2rem;
text-decoration: underline;
color: #9ca3af;
text-decoration-color:#9ca3af;
`;

const Authenticate = () => {
    return (
        <div>
            <Outlet />
        </div>
    )
}



export const Register = () => {
    const showRef = useRef();
    const classRef = useRef();

    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState()

    const login = (e) => {
        e.preventDefault();
        registerService({ username, email, password })
    }

    return (
        <div className="container w-100">
            {/* <form method="post" action="@{/user/register/save}"
                object="${user}"> */}
            <Form onSubmit={(e) => login(e)}>
                <Label htmlFor="userame"> Username </Label>
                <Input    id="username" type="text" onChange={e => setUsername(e.target.value)} />
                {/* <p if="${#fields.hasErrors('username')}"
                    errorclassName="form-field-error" errors="*{username}"
                    className="error"></p> */}

                <Label htmlFor="email"> Email </Label>
                <Input id="email"   field="*{email}" type="text"  onChange={e => setEmail(e.target.value)} />
                {/* <p each="error:${#fields.errors('email')}" text="${error}"
                    className="error"></p> */}
                {/* <p className="text-danger" if="${message}" text="${message}"></p> */}
                <Label htmlFor="password"> Password </Label>

                <InputFlex>
                    <PasswordField autoComplete id="password" ref={showRef} field="*{password}" type="password"  required  onChange={e=>setPassword(e.target.value)}/>
                    <i id="eye" style={{ color: "black" }} ref={classRef}
                        className="bi bi-eye-slash-fill" onClick={() => {
                            if (showRef.current.type === "password") {
                                showRef.current.type = "text";
                                classRef.current.className = "bi bi-eye-fill";
                            } else {
                                showRef.current.type = "password";
                                classRef.current.className = "bi bi-eye-slash-fill";
                            }
                        }}></i>
                </InputFlex>

                {/* <p each="error:${#fields.errors('password')}" text="${error}"
                    className="error"></p> */}
                <button type="submit" className="btn btn-success mt-3">Register</button>

            </Form>
            <p>
                Already a user? <a href="/authenticate/login">Login</a>
            </p>
        </div>
    )
}

export const Login = () => {
    const showRef = useRef();
    const classRef = useRef();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState()

    const login = (e) => {
        e.preventDefault();
        loginService({ email, password })
    }
    return (
        <div className="container w-75">
            <Form onSubmit={(e) => login(e)}>
                {/* action="@{/login}"  object="${updateUser}" */}
                {/* <p if="${param.error}" className="alert alert-error error">Invalid
                    Email or Password Combination!</p> */}
                
                    <Label htmlFor="email"> Email </Label>
                    <Input autoComplete id="email" type="email"  onChange={(e) => setEmail(e.target.value)} />
                    {/* <p each="error:${#fields.errors('email')}" text="${error}"></p> */}
                
                
                    <Label htmlFor="password"> Password </Label>
                    <InputFlex>
                        <PasswordField autoComplete id="password" ref={showRef} onChange={(e) => setPassword(e.target.value)} type="password"
                            required /><i id="eye" style={{ color: "black" }} ref={classRef}
                                className="bi bi-eye-slash" onClick={() => {
                                    if (showRef.current.type === "password") {
                                        showRef.current.type = "text";
                                        classRef.current.className = "bi bi-eye-fill";
                                    } else {
                                        showRef.current.type = "password";
                                        classRef.current.className = "bi bi-eye-slash-fill";
                                    }
                                }}></i>
                    </InputFlex>

                    {/* <p each="error:${#fields.errors('password')}" text="${error}"></p> */}
                


                <button type="submit" className="btn btn-success mt-3">Login</button>

            </Form>
            <p>
                New user? <Link to="/authenticate/register" className="btn btn-primary text-light">Register</Link>
            </p>
        </div>
    )
}


export default Authenticate;
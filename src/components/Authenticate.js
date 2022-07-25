import React, { useRef, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { loginService, registerService } from '../services/userService'

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
        <div className="container">
            {/* <form method="post" action="@{/user/register/save}"
                object="${user}"> */}
            <form onSubmit={(e) => login(e)}>
                <label htmlFor="userameControl"> Username </label>
                <input
                    id="usernameControl" type="text"
                    className="form-control" onChange={e => setUsername(e.target.value)} />
                {/* <p if="${#fields.hasErrors('username')}"
                    errorclassName="form-field-error" errors="*{username}"
                    className="error"></p> */}

                <label htmlFor="emailControl"> Email </label>
                <input id="emailControl"
                    field="*{email}" type="text" className="form-control" onChange={e => setEmail(e.target.value)} />
                {/* <p each="error:${#fields.errors('email')}" text="${error}"
                    className="error"></p> */}
                {/* <p className="text-danger" if="${message}" text="${message}"></p> */}
                <label htmlFor="passwordControl"> Password </label>

                <div className="d-flex w-100 justify-content-between">
                    <input autoComplete id="passwordControl" ref={showRef} field="*{password}" type="password"
                        required className="form-control w-50"  onChange={e=>setPassword(e.target.value)}/>
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
                </div>

                {/* <p each="error:${#fields.errors('password')}" text="${error}"
                    className="error"></p> */}
                <button type="submit" className="btn btn-success mt-3">Register</button>

            </form>
            <p>
                Already a user? <a href="@{/login}">Login</a>
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
            <form onSubmit={(e) => login(e)}>
                {/* action="@{/login}"  object="${updateUser}" */}
                {/* <p if="${param.error}" className="alert alert-error error">Invalid
                    Email or Password Combination!</p> */}
                <div className='d-flex w-full justify-content-between'>
                    <label htmlFor="emailControl"> Email </label>
                    <input autoComplete id="emailControl" type="email" required className="form-control  w-50" onChange={(e) => setEmail(e.target.value)} />
                    {/* <p each="error:${#fields.errors('email')}" text="${error}"></p> */}
                </div>
                <div className='d-flex w-full justify-content-between'>
                    <label htmlFor="passwordControl"> Password </label>
                    <div className="d-flex w-full justify-content-between">
                        <input autoComplete id="passwordControl" ref={showRef} onChange={(e) => setPassword(e.target.value)} type="password"
                            required className="form-control w-75" /><i id="eye" style={{ color: "black" }} ref={classRef}
                                className="bi bi-eye-slash" onClick={() => {
                                    if (showRef.current.type === "password") {
                                        showRef.current.type = "text";
                                        classRef.current.className = "bi bi-eye-fill";
                                    } else {
                                        showRef.current.type = "password";
                                        classRef.current.className = "bi bi-eye-slash-fill";
                                    }
                                }}></i>
                    </div>

                    {/* <p each="error:${#fields.errors('password')}" text="${error}"></p> */}
                </div>


                <button type="submit" className="btn btn-success mt-3">Login</button>

            </form>
            <p>
                New user? <Link to="/authenticate/register" className="btn btn-primary text-light">Register</Link>
            </p>
        </div>
    )
}


export default Authenticate;
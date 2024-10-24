
import React from "react";
import "./logincomponent.css";
import { useNavigate } from "react-router-dom";

export  function LoginComponent() {
    const navigate = useNavigate();
    async function loginHandler() {
            navigate("/dashboard")
    }
    return (
        <div className="login-container">
            <h2>Login</h2>
            <label htmlFor="">Username</label>
            <input type="text" placeholder="Enter your username" />
            <label htmlFor=""> Password </label>
            <input type="password" placeholder="Enter your password" />
            <button onClick={loginHandler}>Login</button>
        </div>
    )
}
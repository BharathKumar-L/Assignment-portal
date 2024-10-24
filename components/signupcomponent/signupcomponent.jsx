
import "./signupcomponent.css";
import { useNavigate } from "react-router-dom";

export  function SignUpComponent() {
    const navigate = useNavigate();
    function signUpHandler() {
        navigate('/dashboard')
    }
    return (
        <div className="login-container">
            <h2>Sign Up</h2>
            <label htmlFor="">Username</label>
            <input type="text" placeholder="Enter your username" onChange={(e) => setUsername(e.target.value)} />
            <label htmlFor=""> Password </label>
            <input type="password" placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)} />
            <button onClick={signUpHandler}>Sign Up</button>
        </div>
    )
}
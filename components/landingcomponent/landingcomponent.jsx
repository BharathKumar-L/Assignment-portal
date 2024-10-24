import "./landingcomponent.css"
import { useNavigate } from "react-router-dom";
export function LandingComponent() {

    const navigate = useNavigate();

    function onLogin(){
        navigate('/login')
    }

    function onSignUp(){
        navigate('/signup')
    }
    return (
        <div className="landing-container">
            <h1 className="landing-title">Organize Your Life with TodoMaster</h1>
            <h4 className="landing-subtitle">
                Boost your productivity and never miss a task again. Simple, fast, and intuitive task management for everyone.
            </h4>
            <div className="landing-buttons">
                <button className="signup-button" onClick={onSignUp}>Sign Up</button>
                <button className="login-button" onClick={onLogin}>Log In</button>
            </div>
        </div>
    );
}
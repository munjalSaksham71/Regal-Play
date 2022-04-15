import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/index";
import "./SignupScreen.css";

const SignupScreen = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("")
    const { user, signupUser } = useAuth();

    const navigate = useNavigate()

    const submitHandler = async (e) => {
        e.preventDefault();
        if(password === confirmPassword){
            try {
                await signupUser(email, password);
            } catch (error) {
                alert(error.message)
            }
        } else {
            alert("Password and confirm password fields didnt match.")
        }
    }

    useEffect(() => {
      if(user){
        navigate("/videos")
      }
    }, [user])

    return (
    <div className="flex-column align-center">
      <form className="flex-column form-height">
        <div className="heading1 mt-3">SIGN UP</div>
        <label className="mt-5" htmlFor="email">
          Email Address
        </label>
        <input
          className="mt-1 p-1"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label className="mt-1" htmlFor="password">
          Password
        </label>
        <input
          className="mt-1 p-1"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label className="mt-1" htmlFor="password">
          Confirm Password
        </label>
        <input
          className="mt-1 p-1"
          type="password"
          placeholder="Enter your password again"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </form>
      <div className="flex-column links">
      <button className="btn mt-3 signup-button" onClick={submitHandler}> Sign Up</button>
      <span className="mt-2">
        Already have an account?
        <Link to="/login" className="ml-1 bolder">
          Login here
        </Link>
      </span>
      </div>
    </div>
  );
};

export { SignupScreen };

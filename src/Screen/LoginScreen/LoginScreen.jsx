import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./LoginScreen.css";
import { useAuth } from '../../context/index';

const LoginScreen = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { user, loginUser } = useAuth();

    const navigate = useNavigate()

    const submitHandler = async (e) => {
        e.preventDefault();
        if(!email || !password ){
          console.log("Please enter both the fields");
        }
        try {
            await loginUser(email, password);
        } catch (error) {
            console.log(error.message)
        }
    }

    const guestLoginHandler = async (e) => {
      e.preventDefault();
      try {
          await loginUser("adarshbalika@gmail.com", "adarshBalika123");
      } catch (error) {
          console.log("Something went wrong.")
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
        <div className="heading1 mt-3">LOGIN USER</div>
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
      </form>
      <div className="flex-column links">
        <div className="flex-row mt-3">
        <button className="btn login-button" onClick={submitHandler}>Login</button>
        <button className="btn guest-login-button" onClick={guestLoginHandler}>Continue as Guest</button>
        </div>
      <span className="mt-2">
        New Customer?
        <Link to="/signup" className="ml-1 bolder">
          Register here
        </Link>
      </span>
      </div>
    </div>
  );
};

export { LoginScreen };

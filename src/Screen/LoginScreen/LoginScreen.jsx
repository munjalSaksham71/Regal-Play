import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./LoginScreen.css";
import { useDispatch, useSelector } from "react-redux";
import { Login } from "../../actions/authAction";
import validator from 'validator';

const LoginScreen = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth)

    const navigate = useNavigate()

    const submitHandler = async (e) => {
        e.preventDefault();
        if(!email || !password ){
          return alert("Please enter both the fields");
        }
        if(!validator.isEmail(email)) {
          return alert("Re-check your email format");
        }
        try {
            dispatch(Login({email, password}));
        } catch (error) {
            alert("User Credential Didn't Match")
        }
    }

    const guestLoginHandler = async (e) => {
      e.preventDefault();
      try {
          dispatch(Login({ email: "johndoe@gmail.com", password: "johnDoe123"}));
      } catch (error) {
          alert("Something went wrong.")
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
        <div className="heading1 mt-3">LOGIN</div>
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

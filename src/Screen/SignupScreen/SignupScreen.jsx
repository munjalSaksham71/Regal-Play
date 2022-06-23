import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Signup } from "../../actions/authAction";
import "./SignupScreen.css";
import validator from 'validator';

const SignupScreen = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("")

    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth)

    const navigate = useNavigate()

    const submitHandler = async (e) => {
        e.preventDefault();
        if(!email || !password || !confirmPassword) {
          return alert("Please Enter all fields in form")
        }
        if(!validator.isEmail(email)) {
          return alert("Re-check your email format");
        }
        if(password === confirmPassword){
            try {
                dispatch(Signup({email, password}));
            } catch (error) {
                console.log(error.message)
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
          className="mt-1 p-1 input-container"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label className="mt-1" htmlFor="password">
          Password
        </label>
        <input
          className="mt-1 p-1 input-container"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label className="mt-1" htmlFor="password">
          Confirm Password
        </label>
        <input
          className="mt-1 p-1 input-container"
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

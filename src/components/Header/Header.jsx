import "./Header.css";
import { AiOutlineUser } from "../Utils/icons";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Logout } from "../../slices/authSlice";

const Header = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  return (
    <div className="app_header flex-row">
      <div className="brand_name flex-row">
        <Link to="/" className="brand_name heading2">
          Regal Play
        </Link>
      </div>
      {user ? (
        <div
          className="logout_button user_profile"
          onClick={() => dispatch(Logout())}
        >
          Logout
        </div>
      ) : (
        <Link to="/login" className="user_profile">
          <AiOutlineUser className="icon_user" /> Login
        </Link>
      )}
    </div>
  );
};

export default Header;

import './Header.css'
import { BiSearchAlt, AiOutlineUser } from '../Utils/icons'
import { useAuth }  from '../../context/index'
import { Link } from 'react-router-dom';

const Header = () => {
    const {user, logoutUser} = useAuth();
    return (
        <div className="app_header flex-row">
            <div className="brand_name flex-row">
                <div className="brand_name heading2"> Regal Play </div>
            </div>
            <div className="search_bar flex-row">
                <input type="text" placeholder="Search" className="search-input" />
                <div className="icon-container"><BiSearchAlt className="icon" /></div>
            </div>
            {user ? <div className="logout_button user_profile" onClick={logoutUser}>Logout</div> : 
            <Link to="/login" className="user_profile"><AiOutlineUser className="icon_user" /> Login</Link> } 
        </div>
    )
}

export default Header

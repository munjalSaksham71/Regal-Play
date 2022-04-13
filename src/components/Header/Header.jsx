import './Header.css'
import { BiSearchAlt, AiOutlineUser } from '../Utils/icons'

const Header = () => {
    return (
        <div className="app_header flex-row">
            <div className="brand_name flex-row">
                <div className="brand_name heading2"> Regal Play </div>
            </div>
            <div className="search_bar flex-row">
                <input type="text" placeholder="Search" className="search-input" />
                <div className="icon-container"><BiSearchAlt className="icon" /></div>
            </div>
            <div className="user_profile"><AiOutlineUser className="icon_user" /></div>
        </div>
    )
}

export default Header

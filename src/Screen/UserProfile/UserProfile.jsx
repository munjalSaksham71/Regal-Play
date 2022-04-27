import jwt_decode from "jwt-decode";
import SideBar from "../../components/SideBar/SideBar";
import { useAuth } from "../../context";
import './UserProfile.css';

const UserProfile = () => {
  const decodedVal = jwt_decode(localStorage.getItem("token"));
  const { logoutUser } = useAuth();
  
  return (
    <div>
      <SideBar pageWrapId={"page-wrap"} outerContainerId={"outer-container"} />
      <div className="main_container flex-column">
        <div className="heading2 center page-title"> User Profile </div>
        <div className="flex-row profile-content">
            <img className="profile_img" src="https://res.cloudinary.com/dniz23rju/image/upload/v1650817982/regal-play-thumbnail/img_avatar_xvstvz.png" alt="User Image" />
            <div className="flex-column profile-info">
                <div className="bolder mt-2 ml-3">{decodedVal.email}</div>
                <button className="btn btn-primary ml-3 mt-2" onClick={logoutUser}>Logout</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export { UserProfile };

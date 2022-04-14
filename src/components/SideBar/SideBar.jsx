import "./SideBar.css";
import {
  AiFillHome,
  AiOutlineHistory,
  BiStopwatch,
  AiFillLike,
  MdPlaylistAdd,
  AiOutlineUser,
} from "../Utils/icons";
import { Link } from "react-router-dom";


const SideBar = () => {
  return (
    <div className="sidebar flex-column pt-3">
      <Link to="/" className="list_item flex-row p-3">
        <AiFillHome /> Home
      </Link>
      <hr className="mt-3" />
      <Link to="/history" className="list_item flex-row  p-3">
        <AiOutlineHistory /> History
      </Link>
      <Link to="/watch-later" className="list_item flex-row  p-3">
        <BiStopwatch /> Watch Later
      </Link>
      <Link to="/likes" className="list_item flex-row  p-3">
        <AiFillLike /> Liked Video
      </Link>
      <Link to="/myPlaylists" className="list_item flex-row  p-3">
        <MdPlaylistAdd /> My Playlist
      </Link> <hr className="mt-2" />
      <Link to="/myPlaylists" className="list_item flex-row  p-3">
        <AiOutlineUser /> User Profile
      </Link>
    </div>
  );
};

export default SideBar;

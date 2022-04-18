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
import { useFilter } from "../../context/index";

const SideBar = ({filterShown = false}) => {
  const {
    filterState: { byCategory },
    filterDispatch,
  } = useFilter();
  return (
    <div className="sidebar flex-column pt-3">
      <Link to="/videos" className="list_item flex-row p-3">
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
      </Link>
      <hr className="mt-2" />
      {filterShown && (
              <div className="flex-column filter-item">
              <div className="flex-row filter_title">
              <h2 className="heading3 filter_title pl-3 pt-2">Filter</h2>
              <div className="clear_btn" onClick={() => filterDispatch({type: 'CLEAR_ALL'}) }>Clear All</div>
              </div>
              <label className="flex-row list_item  pl-3 pt-2">
                <input
                  className="mr-1"
                  type="checkbox"
                  checked={byCategory.includes("Computer Programming")}
                  onClick={() =>
                    filterDispatch({
                      type: "BY_CATEGORY",
                      payload: "Computer Programming",
                    })
                  }
                />
                Programming
              </label>
              <label className="flex-row list_item  pl-3 pt-2">
                <input
                  className="mr-1"
                  type="checkbox"
                  checked={byCategory.includes("Frontend Development")}
                  onClick={() =>
                    filterDispatch({
                      type: "BY_CATEGORY",
                      payload: "Frontend Development",
                    })
                  }
                />
                Frontend
              </label>
              <label className="flex-row list_item  pl-3 pt-2">
                <input
                  className="mr-1"
                  type="checkbox"
                  checked={byCategory.includes("Backend Development")}
                  onClick={() =>
                    filterDispatch({
                      type: "BY_CATEGORY",
                      payload: "Backend Development",
                    })
                  }
                />
                Backend
              </label>
              <hr className="mt-2" />
            </div>
      )}
      <Link to="/myPlaylists" className="list_item flex-row  p-3">
        <AiOutlineUser /> User Profile
      </Link>
    </div>
  );
};

export default SideBar;

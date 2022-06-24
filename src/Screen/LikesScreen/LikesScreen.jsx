import { BiListPlus } from "react-icons/bi";
import { BsFillPlayFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { DeleteFromLikes } from "../../actions/likeVideoAction";
import SideBar from "../../components/SideBar/SideBar";
import "../WatchLaterScreen/WatchLater.css";

const LikesScreen = () => {
  const dispatch = useDispatch();
  const {likedVideos, likedVideosLoading, likedVideosError} = useSelector((state) => state.likes)

  return (
    <div>
      <SideBar pageWrapId={"page-wrap"} outerContainerId={"outer-container"} />
      <div className="main_container flex-column">
        <div className="heading2 center page-title"> Liked Videos </div>
        {likedVideosLoading && <div> Loading... </div>}
        {likedVideos && (
          <div className="cards flex-row">
            {likedVideos.length === 0 && (
              <h2 className="ml-5 mt-4 heading3"> No Liked Videos!!! </h2>
            )}
            {likedVideos.map((video) => (
              <div key={video._id} className="video_card flex-column">
                <img className="card_image" src={video.thumbnail} />
                <div className="video_title">{video.title}</div>
                <div className="video_author">{video.creator}</div>
                <div className="video_buttons flex-row">
                  <Link to={`/video/${video._id}`} className="btn btn-primary">
                    <BsFillPlayFill className="card_icon" /> Play Now
                  </Link>
                  <button
                    onClick={() => dispatch(DeleteFromLikes(video._id))}
                    className="ml-1 btn btn-error"
                  >
                    <BiListPlus className="remove_watchlist-icon" />
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export { LikesScreen };

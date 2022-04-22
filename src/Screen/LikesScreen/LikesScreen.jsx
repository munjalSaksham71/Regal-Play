import { BiListPlus } from "react-icons/bi";
import { BsFillPlayFill } from "react-icons/bs";
import SideBar from "../../components/SideBar/SideBar";
import { useLikes } from "../../context";
import "../WatchLaterScreen/WatchLater.css";

const LikesScreen = () => {
  const {
    likeState: { likedVideos },
    likeDispatch,
  } = useLikes();

  const removeHandler = async (id) => {
    await likeDispatch({ type: "REMOVE_FROM_LIKED", payload: id });
  };

  return (
    <div>
      <SideBar pageWrapId={"page-wrap"} outerContainerId={"outer-container"} />
      <div className="main_container flex-column">
        <div className="heading2 center page-title"> Liked Videos </div>
        {likedVideos && (
          <div className="cards flex-row">
            {likedVideos.length === 0 && (
              <h2 className="ml-5 mt-4 heading3"> No Liked Videos!!! </h2>
            )}
            {likedVideos.map((video) => (
              <div className="video_card flex-column">
                <img className="card_image" src={video.thumbnail} />
                <div className="video_title">{video.title}</div>
                <div className="video_author">{video.creator}</div>
                <div className="video_buttons flex-row">
                  <button className="btn btn-primary">
                    <BsFillPlayFill className="card_icon" /> Play Now
                  </button>
                  <button
                    onClick={() => removeHandler(video._id)}
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

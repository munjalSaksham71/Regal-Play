import { BiListPlus } from "react-icons/bi";
import { BsFillPlayFill } from "react-icons/bs";
import SideBar from "../../components/SideBar/SideBar";
import { useHistory } from "../../context";
import "../WatchLaterScreen/WatchLater.css";

const HistoryScreen = () => {
  const {
    historyState: { historyVideos },
    historyDispatch,
  } = useHistory();

  const removeHandler = async (id) => {
    await historyDispatch({ type: "REMOVE_FROM_HISTORY", payload: id });
  };


  return (
    <div className="flex-row">
      <SideBar />
      <div className="main_container flex-column">
        <div className="heading2 center page-title"> History </div>
        {historyVideos && (
          <div className="cards flex-row">
            {historyVideos.length === 0 && (
              <h2 className="ml-5 mt-4 heading3"> No Videos Found!!! </h2>
            )}
            {historyVideos.map((video) => (
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

export { HistoryScreen };

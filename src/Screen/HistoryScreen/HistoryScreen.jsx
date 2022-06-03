import { BiListPlus } from "react-icons/bi";
import { BsFillPlayFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { ClearAllHistory, DeleteFromHistory } from "../../actions/historyAction";
import SideBar from "../../components/SideBar/SideBar";
import "../WatchLaterScreen/WatchLater.css";

const HistoryScreen = () => {

  const { historyVideos, historyLoading } = useSelector((state) => state.history)
  const dispatch = useDispatch();

  return (
    <div>
      <SideBar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
      <div className="clear_history_btn btn" onClick={() => dispatch(ClearAllHistory())}>CLEAR&nbsp;ALL</div>
      <div className="main_container flex-column">
        <div className="heading2 center page-title"> History </div>
        {historyLoading && <div>Loading...</div>}
        {historyVideos && (
          <div className="cards flex-row">
            {historyVideos.length === 0 && (
              <h2 className="ml-5 mt-4 heading3"> No Videos Found!!! </h2>
            )}
            {historyVideos.map((video) => (
              <div key={video._id} className="video_card flex-column">
                <img className="card_image" src={video.thumbnail} />
                <div className="video_title">{video.title}</div>
                <div className="video_author">{video.creator}</div>
                <div className="video_buttons flex-row">
                  <button className="btn btn-primary">
                    <BsFillPlayFill className="card_icon" /> Play Now
                  </button>
                  <button
                    onClick={() => dispatch(DeleteFromHistory(video._id))}
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

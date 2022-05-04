import { BiListPlus } from "react-icons/bi";
import { BsFillPlayFill } from "react-icons/bs";
import { clearHistory, deleteFromHistory } from "../../actions/historyAction";
import SideBar from "../../components/SideBar/SideBar";
import { useHistory } from "../../context";
import "../WatchLaterScreen/WatchLater.css";

const HistoryScreen = () => {
  const {
    historyState: { historyVideos },
    historyDispatch,
  } = useHistory();

  const removeHandler = async (video) => {
    console.log(video)
    const data = await deleteFromHistory(video);
    await historyDispatch({ type: "REMOVE_FROM_HISTORY", payload: data.history });
  };

  const clearHistroyHandler = async () => {
    const { data } = await clearHistory();
    historyDispatch({type: 'CLEAR_HISTORY', payload: data.history})
  }

  return (
    <div>
      <SideBar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
      <div className="clear_history_btn btn" onClick={clearHistroyHandler}>CLEAR&nbsp;ALL</div>
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
                    onClick={() => removeHandler(video)}
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

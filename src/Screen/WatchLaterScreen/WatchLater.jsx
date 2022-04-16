import { BiListPlus } from "react-icons/bi";
import { BsFillPlayFill } from "react-icons/bs";
import SideBar from "../../components/SideBar/SideBar";
import { useWatchlist } from "../../context";
import './WatchLater.css'

const WatchLaterScreen = () => {
  const {
    watchlistState: { watchListVideos },
    watchlistDispatch,
  } = useWatchlist();

  const removeHandler = async (id) => {
    await watchlistDispatch({ type: "REMOVE_FROM_WATCHLIST", payload: id });
  };

  console.log(watchListVideos);

  return (
    <div className="flex-row">
      <SideBar />
      <div className="main_container flex-column">
      <div className="heading2 center page-title"> Watch Later </div>
        {watchListVideos && (
          <div className="cards flex-row">
            {watchListVideos.map((video) => (
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

export { WatchLaterScreen };

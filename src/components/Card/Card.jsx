import { BiListPlus } from "react-icons/bi";
import { BsFillPlayFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { addToWatchlater } from "../../actions/watchLaterAction";
import { useWatchlist } from "../../context";
import "./Card.css";

const Card = ({ video }) => {
  const {
    watchlistState: { watchListVideos },
    watchlistDispatch,
  } = useWatchlist();

  const addToWatchlist = async () => {
    try {
      const { data } = await addToWatchlater(video);
      watchlistDispatch({ type: "ADD_TO_WATCHLIST", payload: data.watchlater });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="video_card flex-column">
      <img className="card_image" src={video.thumbnail} />
      <div className="video_title">{video.title}</div>
      <div className="video_author">{video.creator}</div>
      <div className="video_buttons flex-row">
        <Link to={`/video/${video._id}`} className="btn btn-primary play_btn">
          <BsFillPlayFill className="card_icon" /> Play Now
        </Link>
        <button
          disabled={watchListVideos.some((v) => v._id === video._id)}
          onClick={addToWatchlist}
          className="ml-1 watchlist-btn btn btn-secondary"
        >
          <BiListPlus className="watchlist_icon" />
          Watchlist
        </button>
      </div>
    </div>
  );
};

export default Card;

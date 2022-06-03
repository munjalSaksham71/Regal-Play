import { BiListPlus } from "react-icons/bi";
import { BsFillPlayFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AddToWatchLater } from "../../actions/watchLaterAction";
import "./Card.css";

const Card = ({ video }) => {
  const dispatch = useDispatch();

  const { watchListVideos } = useSelector((state) => state.watchlater)

  const addToWatchlist = () => {
    try {
      dispatch(AddToWatchLater(video))
      console.log(video);
    } catch (error) {
      console.log(error.response)
    }
  }

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

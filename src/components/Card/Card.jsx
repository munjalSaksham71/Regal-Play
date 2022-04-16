import { BiListPlus } from "react-icons/bi";
import { BsFillPlayFill } from "react-icons/bs";
import { useWatchlist } from "../../context";
import "./Card.css";

const Card = ({ video }) => {
  const { watchlistState : {watchListVideos}, watchlistDispatch } = useWatchlist()

  const addToWatchlist  = async () => {
    await watchlistDispatch({type: 'ADD_TO_WATCHLIST', payload: video});
  }

  return (
    <div className="video_card flex-column">
      <img className="card_image" src={video.thumbnail} />
      <div className="video_title">{video.title}</div>
      <div className="video_author">{video.creator}</div>
      <div className="video_buttons flex-row">
        <button className="btn btn-primary"><BsFillPlayFill className="card_icon" /> Play Now</button>
        <button disabled={watchListVideos.includes(video)} onClick={addToWatchlist} className= "ml-1 watchlist-btn btn btn-secondary"><BiListPlus className="watchlist_icon" />Watchlist</button>
      </div>
    </div>
  );
};

export default Card;

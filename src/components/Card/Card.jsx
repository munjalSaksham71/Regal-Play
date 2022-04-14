import { BiListPlus } from "react-icons/bi";
import { BsFillPlayFill } from "react-icons/bs";
import "./Card.css";

const Card = ({ video }) => {
  return (
    <div className="video_card flex-column">
      <img className="card_image" src={video.thumbnail} />
      <div className="video_title">{video.title}</div>
      <div className="video_author">{video.creator}</div>
      <div className="video_buttons flex-row">
        <button className="btn btn-primary"><BsFillPlayFill className="card_icon" /> Play Now</button>
        <button className= "ml-1 btn btn-secondary"><BiListPlus className="watchlist_icon" /> Watchlist</button>
      </div>
    </div>
  );
};

export default Card;

import { BiListPlus } from "react-icons/bi";
import { BsFillPlayFill } from "react-icons/bs";
import SideBar from "../../components/SideBar/SideBar";
import {
  DeleteFromWatchlater,
  GetWatchLater,
} from "../../actions/watchLaterAction";
import "./WatchLater.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const WatchLaterScreen = () => {
  const dispatch = useDispatch();

  const { watchListVideos, watchlaterLoading, watchlaterError } = useSelector(
    (state) => state.watchlater
  );

  useEffect(() => {
    dispatch(GetWatchLater());
  }, []);

  return (
    <div>
      <SideBar
        pageWrapId={"page-wrap"}
        outerContainerId={"outer-container"}
        filterShown={true}
      />
      <div className="main_container flex-column">
        <div className="heading2 center page-title"> Watch Later </div>
        {watchlaterLoading && <div> Loading..... </div>}
        {watchlaterError && <div> SomeThing Went Wrong </div>}
        {watchListVideos && (
          <div className="cards flex-row">
            {watchListVideos.length === 0 && (
              <h2 className="ml-5 mt-4 heading3"> No Videos Found!!! </h2>
            )}
            {watchListVideos.map((video) => (
              <div key={video._id} className="video_card flex-column">
                <img className="card_image" src={video?.thumbnail} />
                <div className="video_title">{video?.title}</div>
                <div className="video_author">{video?.creator}</div>
                <div className="video_buttons flex-row">
                  <Link to={`/video/${video._id}`} className="btn btn-primary">
                    <BsFillPlayFill className="card_icon" /> Play Now
                  </Link>
                  <button
                    onClick={() => dispatch(DeleteFromWatchlater(video._id))}
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

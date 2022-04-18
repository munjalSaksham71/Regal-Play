import axios from "axios";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import SideBar from "../../components/SideBar/SideBar";
import { useParams } from "react-router-dom";
import "./VideoPreview.css";
import { AiFillLike, AiOutlineLike } from "../../components/Utils/icons";
import { useHistory, useLikes, useWatchlist } from "../../context";
import { isEmptyObject } from '../../components/Utils/helper';


const VideoPreview = () => {
  const [video, setVideo] = useState({});
  const { id } = useParams();

  const {
    likeState: { likedVideos },
    likeDispatch,
  } = useLikes();

  const {
    watchlistState: { watchListVideos },
    watchlistDispatch,
  } = useWatchlist();

  const {
    historyDispatch
  } = useHistory();

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(`/api/video/${id}`);
        setVideo(data.video);
      } catch (error) {
        alert(error);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        !isEmptyObject(video) && await historyDispatch({type: 'ADD_TO_HISTORY', payload: video })
      } catch (error) {
        alert(error);
      }
    })()
  }, [video])

  return (
    <div className="flex-row">
      <SideBar />
      <div className="video_player flex-column">
        <ReactPlayer
          className="ml-5 mt-5"
          height={"30rem"}
          width={"50rem"}
          url={video.video_link}
        />
        <div className="action-icons mt-3 flex-row">
          {likedVideos.some((v) => v._id === video._id) ? (
            <div
              onClick={() =>
                likeDispatch({ type: "REMOVE_FROM_LIKED", payload: video._id })
              }
            >
              <AiFillLike />
            </div>
          ) : (
            <div
              onClick={() =>
                likeDispatch({ type: "ADD_TO_LIKED", payload: video })
              }
            >
              <AiOutlineLike />
            </div>
          )}
          <div>Add to Playlist</div>
          {watchListVideos.some((v) => v._id === video._id) ? (
            <div
            className="btn btn-error"
              onClick={() =>
                watchlistDispatch({
                  type: "REMOVE_FROM_WATCHLIST",
                  payload: video._id,
                })
              }
            >
              Remove From Watchlist
            </div>
          ) : (
            <div
            className="btn btn-primary"
              onClick={() =>
                watchlistDispatch({ type: "ADD_TO_WATCHLIST", payload: video })
              }
            >
              Add to Watch Later
            </div>
          )}
        </div>
      </div>
      <div className="mt-5 video-desc flex-column ml-5">
        <h3 className="heading3">{video.title}</h3> <hr className="mt-2" />
        <div className="content-title mt-3">Description: </div>
        <div className="mt-1">{video.description}</div> <hr className="mt-2" />
        <div className="content-title mt-3">Instructor: </div>
        <div className="mt-1">{video.creator}</div> <hr className="mt-2" />
        <div className="content-title mt-3">Category: </div>
        <div className="mt-1">{video.category}</div> <hr className="mt-2" />
      </div>
    </div>
  );
};

export { VideoPreview };

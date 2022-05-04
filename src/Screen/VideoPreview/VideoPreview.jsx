import axios from "axios";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import SideBar from "../../components/SideBar/SideBar";
import { useParams } from "react-router-dom";
import "./VideoPreview.css";
import { AiFillLike, AiOutlineLike , MdPlaylistAdd, BiStopwatch } from "../../components/Utils/icons";
import { useHistory, useLikes, usePlaylist, useWatchlist } from "../../context";
import { isEmptyObject } from "../../components/Utils/helper";
import CreatePlaylist from "../../components/CreatePlaylist/CreatePlaylist";
import { addToHistory } from "../../actions/historyAction";
import { addToWatchlater, deleteFromWatchlater } from "../../actions/watchLaterAction";
import { addToLiked, deleteFromLiked } from "../../actions/likeVideoAction";

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

  const { historyDispatch } = useHistory();

  const { isModalOpen, setIsModalOpen } = usePlaylist();

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(`/api/video/${id}`);
        setVideo(data.video);
        const response  = await addToHistory(data.video);
        historyDispatch({ type: "ADD_TO_HISTORY", payload: response.data.history });
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const playlistHandler = () => {
    setIsModalOpen(true);
  };

  const removeFromWatchlistHandler = async (id) => {
    const { data } = await deleteFromWatchlater(id);
    watchlistDispatch({type: 'REMOVE_FROM_WATCHLIST', payload: data.watchlater})
  }

  const addToWatchlistHandler = async (video) => {
    const { data } = await addToWatchlater(video);
    watchlistDispatch({type: 'ADD_TO_WATCHLIST', payload: data.watchlater})
  }

  const removeFromLikedVideo = async (id) => {
    const { data } = await deleteFromLiked(id);
    likeDispatch({type: 'REMOVE_FROM_LIKED', payload: data.likes})
  }

  const addToLikedVideo = async (video) => {
    const { data } = await addToLiked(video);
    likeDispatch({type: 'ADD_TO_LIKED', payload: data.likes})
  }

  return (
    <div className="flex-row">
      <SideBar pageWrapId={"page-wrap"} outerContainerId={"outer-container"} />
      <div className="video_player flex-column">
        <ReactPlayer
          className="ml-5 mt-5"
          height={"100%"}
          width={"100%"}
          url={video.video_link}
        />
        <div className="action-icons mt-3 flex-row">
          {likedVideos.some((v) => v._id === video._id) ? (
            <div
              onClick={() =>
                removeFromLikedVideo(video._id)
              }
            >
              <AiFillLike className="icon"/>
            </div>
          ) : (
            <div
              onClick={() =>
                addToLikedVideo(video)
              }
            >
              <AiOutlineLike  className="icon"/>
            </div>
          )}
          <div onClick={playlistHandler}><MdPlaylistAdd className="icon" /></div>
          {watchListVideos.some((v) => v._id === video._id) ? (
            <div
              className="btn btn-error ml-auto"
              onClick={() => removeFromWatchlistHandler(video._id)}
            >
              Remove From Watchlist
            </div>
          ) : (
            <div
              className="btn btn-primary ml-auto"
              aria-disabled={true}
              onClick={() => addToWatchlistHandler(video)}
            >
              Add to watchlist
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
      {isModalOpen && <CreatePlaylist playlistVideo={video} />}
    </div>
  );
};

export { VideoPreview };

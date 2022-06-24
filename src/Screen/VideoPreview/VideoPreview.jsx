import axios from "axios";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import SideBar from "../../components/SideBar/SideBar";
import { useParams } from "react-router-dom";
import "./VideoPreview.css";
import { AiFillLike, AiOutlineLike , MdPlaylistAdd } from "../../components/Utils/icons";
import CreatePlaylist from "../../components/CreatePlaylist/CreatePlaylist";
import { AddToLikes, DeleteFromLikes } from "../../actions/likeVideoAction";
import { useDispatch, useSelector } from "react-redux";
import { AddToWatchLater, DeleteFromWatchlater } from "../../actions/watchLaterAction";
import { AddToHistory } from "../../actions/historyAction";
import { openModal } from "../../slices/playlistSlice";


const VideoPreview = () => {
  const [video, setVideo] = useState({});
  const { id } = useParams();

  const dispatch = useDispatch();
  const { watchListVideos } = useSelector((state) => state.watchlater) 
  const { historyVideos } = useSelector((state) => state.history)
  const { likedVideos } = useSelector((state) => state.likes)
  const { isModalOpen } = useSelector((state) => state.playlist)

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(`/api/video/${id}`);
        setVideo(data.video);
        if(!historyVideos.some(v => v.id === data.video.id)){
          console.log("History Effect: ", historyVideos.includes(data.video))
          dispatch(AddToHistory(data.video))
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const playlistHandler = () => {
    dispatch(openModal())
  };

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
                dispatch(DeleteFromLikes(video._id))
              }
            >
              <AiFillLike className="icon"/>
            </div>
          ) : (
            <div
              onClick={() =>
                dispatch(AddToLikes(video))
              }
            >
              <AiOutlineLike  className="icon"/>
            </div>
          )}
          <div onClick={playlistHandler}><MdPlaylistAdd className="icon" /></div>
          {watchListVideos.some((v) => v._id === video._id) ? (
            <div
              className="btn btn-error ml-auto"
              onClick={() => dispatch(DeleteFromWatchlater(video._id))}
            >
              Remove From Watchlist
            </div>
          ) : (
            <div
              className="btn btn-primary ml-auto"
              aria-disabled={true}
              onClick={() => dispatch(AddToWatchLater(video))}
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

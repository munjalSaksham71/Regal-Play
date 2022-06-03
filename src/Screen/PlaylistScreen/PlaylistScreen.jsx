import { BsFillPlayFill, BiListPlus } from "../../components/Utils/icons";
import SideBar from "../../components/SideBar/SideBar";
import "../WatchLaterScreen/WatchLater.css";
import { DeleteVideoFromPlaylist } from "../../actions/addToPlaylistAction";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const PlaylistScreen = () => {
  const dispatch = useDispatch()
  const { playlists } = useSelector((state) => state.playlist)

  const removeHandler = async (playlist_id, video_id) => {
    try {
      dispatch(DeleteVideoFromPlaylist({ playlistId: playlist_id, videoId: video_id}))
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <SideBar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
      <div className="main_container flex-column">
        <div className="heading2 center page-title"> My Playlists </div>
        {playlists.length === 0 && (
          <h2 className="ml-5 mt-4 heading3"> No Playlists </h2>
        )}
        {playlists.map((playlist) => (
          <div>
            <h3 className="heading3" key={playlist._id}>
              {playlist.title}
            </h3>
            {playlist.videos.map((video) => (
              <div>
                <div className="video_card flex-column">
                  <img className="card_image" src={video.thumbnail} />
                  <div className="video_title">{video.title}</div>
                  <div className="video_author">{video.creator}</div>
                  <div className="video_buttons flex-row">
                    <Link
                      to={`/video/${video._id}`}
                      className="btn btn-primary"
                    >
                      <BsFillPlayFill className="card_icon" /> Play Now
                    </Link>
                    <button
                      onClick={() => removeHandler(playlist._id, video._id)}
                      className="ml-1 btn btn-error"
                    >
                      <BiListPlus className="remove_watchlist-icon" />
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export { PlaylistScreen };

import { BsFillPlayFill, BiListPlus } from "../../components/Utils/icons";
import SideBar from "../../components/SideBar/SideBar";
import { usePlaylist } from "../../context";
import "../WatchLaterScreen/WatchLater.css";
import { deleteVideoFromPlaylist } from "../../actions/addToPlaylistAction";
import { Link } from "react-router-dom";

const PlaylistScreen = () => {
  const {
    playlistState: { playlists },
    playlistDispatch,
  } = usePlaylist();

  const removeHandler = async (playlist_id, video_id) => {
    try {
      const data = await deleteVideoFromPlaylist(playlist_id, video_id);
      playlistDispatch({
        type: "REMOVE_FROM_PLAYLIST",
        payload: data.playlist,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex-row">
      <SideBar />
      <div className="main_container flex-column">
        <div className="heading2 center page-title"> My Playlists </div>
        {playlists.length === 0 && (
          <h2 className="ml-5 mt-4 heading3"> No Playlist </h2>
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

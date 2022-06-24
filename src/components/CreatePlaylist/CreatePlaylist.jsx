import { useState } from "react";
import {
  AddPlaylist,
  AddVideoToPlaylist,
  DeletePlaylist,
  DeleteVideoFromPlaylist,
} from "../../actions/addToPlaylistAction";
import "./CreatePlaylist.css";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../slices/playlistSlice";

const CreatePlaylist = ({ playlistVideo }) => {
  const [playlistData, setPlaylistData] = useState({
    title: "",
    description: "",
  });

  const { playlists } = useSelector((state) => state.playlist)
  const dispatch = useDispatch();

  const handleCreatePlaylist = async () => {
    try {
      dispatch(AddPlaylist(playlistData))
      setPlaylistData({ title: "", description: "" });
    } catch (error) {
      console.log(error);
    }
  };

  const deletePlaylistHandler = async (id) => {
    try {
      dispatch(DeletePlaylist(id))
    } catch (error) {
        console.log(error);
    }
  };

  return (
    <div className="flex-column modal">
      <div className="modal_content">
        <div className="mt-1 mb-5 heading2"> Save To... </div>
        <div className="flex-column">
          {playlists.map((playlist) => (
            <div key={playlist._id} className="flex-row">
              <label className="flex-row mb-2 gap">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  checked={playlist.videos.some((video) => {
                    return video._id === playlistVideo._id;
                  })}
                  onChange={(e) => {
                    if (e.target.checked) {
                      dispatch(AddVideoToPlaylist({ playlistId: playlist._id, video:playlistVideo}));
                    } else {
                      dispatch(DeleteVideoFromPlaylist({ playlistId: playlist._id, videoId: playlistVideo._id}));
                    }
                  }}
                />
                {playlist.title}
              </label>
              <div
                onClick={() => deletePlaylistHandler(playlist._id)}
                className="ml-auto"
              >
                X
              </div>
            </div>
          ))}
        </div>

        <label htmlFor="title" className="mb-2">
          <input
            type="text"
            placeholder="Add a title"
            value={playlistData.title}
            className="modal_title"
            onChange={(e) =>
              setPlaylistData({ ...playlistData, title: e.target.value })
            }
          />
        </label>
        <label htmlFor="descriptiom" className="mt-2">
          <input
            type="text"
            placeholder="Add a Description"
            value={playlistData.description}
            className="modal_desc"
            onChange={(e) =>
              setPlaylistData({ ...playlistData, description: e.target.value })
            }
          />
        </label>
        <div className="flex-row">
          <button
            className="btn btn-primary mt-2"
            onClick={handleCreatePlaylist}
          >
            Create
          </button>
          <button
            className="btn btn-error mt-2 ml-3"
            onClick={() => dispatch(closeModal())}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreatePlaylist;

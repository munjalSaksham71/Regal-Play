import { useState } from "react";
import { usePlaylist } from "../../context";
import {
  addVideoToPlaylist,
  createNewPlaylist,
  deletePlaylist,
  deleteVideoFromPlaylist,
} from "../../actions/addToPlaylistAction";
import "./CreatePlaylist.css";

const CreatePlaylist = ({ playlistVideo }) => {
  const [playlistData, setPlaylistData] = useState({
    title: "",
    description: "",
  });
  const {
    playlistState: { playlists },
    playlistDispatch,
    setIsModalOpen,
  } = usePlaylist();

  console.log(playlists);

  const handleCreatePlaylist = async () => {
    try {
      const data = await createNewPlaylist(playlistData);
      playlistDispatch({ type: "CREATE_PLAYLIST", payload: data.playlists });
      setPlaylistData({ title: "", description: "" });
    } catch (error) {
      alert(error);
    }
  };

  const deletePlaylistHandler = async (id) => {
    try {
      const data = await deletePlaylist(id);
      playlistDispatch({ type: "DELETE_PLAYLIST", payload: data.playlists });
    } catch (error) {
        alert(error);
    }
  };

  const addToPlaylist = async (id, video) => {
    try {
      const data = await addVideoToPlaylist(id, video);
      playlistDispatch({ type: "ADD_TO_PLAYLIST", payload: data.playlist });
    } catch (error) {
      alert(error);
    }
  };

  const deleteFromPlaylist = async (id, video_id) => {
    try {
      const data = await deleteVideoFromPlaylist(id, video_id);
      playlistDispatch({
        type: "REMOVE_FROM_PLAYLIST",
        payload: data.playlist,
      });
    } catch (error) {
      alert(error);
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
                      addToPlaylist(playlist._id, playlistVideo);
                    } else {
                      deleteFromPlaylist(playlist._id, playlistVideo._id);
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
            onClick={() => setIsModalOpen(false)}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreatePlaylist;

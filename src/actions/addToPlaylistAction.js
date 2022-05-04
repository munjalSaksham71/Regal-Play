import axios from "axios";


export const getPlaylist = async () => {
  const token = localStorage.getItem("token");
  try {
    const { data } = await axios.get("/api/user/playlists", {
      headers: {
        authorization: token,
      },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const createNewPlaylist = async (playlist) => {
  const token = localStorage.getItem("token");
  try {
    const { data } = await axios.post(
      "/api/user/playlists",
      { playlist: playlist },
      {
        headers: {
          authorization: token,
        },
      }
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const deletePlaylist = async (id) => {
  const token = localStorage.getItem("token");
  try {
    const { data } = await axios.delete(`/api/user/playlists/${id}`, {
      headers: {
        authorization: token,
      },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const addVideoToPlaylist = async (playlistId, video) => {
  const token = localStorage.getItem("token");
  try {
    const { data } = await axios.post(
      `/api/user/playlists/${playlistId}`,
      {
        video,
      },
      {
        headers: {
          authorization: token,
        },
      }
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteVideoFromPlaylist = async (playlistId, videoId) => {
  const token = localStorage.getItem("token");
  try {
    const { data } = await axios.delete(
      `/api/user/playlists/${playlistId}/${videoId}`,
      {
        headers: {
          authorization: token,
        },
      }
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

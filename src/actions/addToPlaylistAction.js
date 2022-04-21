import axios from "axios";

const token = localStorage.getItem("token");

export const getPlaylist = async () => {
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

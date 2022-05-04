import axios from "axios";

const token = localStorage.getItem("token");

export const getWatchLater = async () => {
  try {
    const response = await axios.get("/api/user/watchlater", {
      headers: {
        authorization: token,
      },
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const addToWatchlater = async (video) => {
  try {
    const response = await axios.post(
      "/api/user/watchlater",
      { video },
      {
        headers: {
          authorization: token,
        },
      }
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const deleteFromWatchlater = async (id) => {
  try {
    const response = await axios.delete(`/api/user/watchlater/${id}`, {
      headers: {
        authorization: token,
      },
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

import axios from "axios";


export const getWatchLater = async () => {
  const token = localStorage.getItem("token");
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
  const token = localStorage.getItem("token");
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
  const token = localStorage.getItem("token");
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

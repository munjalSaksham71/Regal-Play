import axios from "axios";


export const getLiked = async () => {
  const token = localStorage.getItem("token");
  try {
    const response = await axios.get("/api/user/likes", {
      headers: {
        authorization: token,
      },
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const addToLiked = async (video) => {
  const token = localStorage.getItem("token");
  try {
    const response = await axios.post(
      "/api/user/likes",
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

export const deleteFromLiked = async (id) => {
  const token = localStorage.getItem("token");
  try {
    const response = await axios.delete(`/api/user/likes/${id}`, {
      headers: {
        authorization: token,
      },
    });
    console.log(response)
    return response;
  } catch (error) {
    console.log(error);
  }
};

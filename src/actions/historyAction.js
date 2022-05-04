import axios from "axios";

const token = localStorage.getItem("token");

export const getHistory = async () => {
  try {
    const response  = await axios.get("/api/user/history", {
      headers: {
        authorization: token,
      },
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const addToHistory = async (video) => {
  try {
    const response  = await axios.post(
      "/api/user/history",
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

export const deleteFromHistory = async (id) => {
  try {
    const  response  = await axios.delete(`/api/user/history/${id}`, {
      headers: {
        authorization: token,
      },
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const clearHistory = async () => {
  try {
    const  response  = await axios.delete(`/api/user/history/all`, {
      headers: {
        authorization: token,
      },
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

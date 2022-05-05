import axios from "axios";

export const getHistory = async () => {
  const token = localStorage.getItem("token");
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
  const token = localStorage.getItem("token");
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
  const token = localStorage.getItem("token");
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
  const token = localStorage.getItem("token");
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

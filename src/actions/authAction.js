import axios from "axios";

export const login = async (email, password) => {
  try {
    const config = {
      headers: {
        "content-type": "application/json",
      },
    };
    const response = await axios.post(
      "/api/auth/login",
      { email, password },
      config
    );
    return response;
  } catch (error) {
    console.log(error.message);
  }
};

export const signup = async (email, password) => {
  try {
    const config = {
      headers: {
        "content-type": "application/json",
      },
    };
    const response = await axios.post(
      "/api/auth/signup",
      {
        name,
        email,
        password,
      },
      config
    );
    return response;
  } catch (error) {
    console.log(error.message);
  }
};

import axios from "axios";
import { toast } from "react-toastify";

const url = "/auth";

// Login user
export const login = async (user) => {
  try {
    const response = await axios.post(url, user);

    if (response.data) {
      localStorage.setItem("user", JSON.stringify(response.data.token));
    }
    return response.data;
  } catch (error) {
    toast.error(
      error.response.data.message || error.response.data || error.message
    );
  }
};

import Cookie from "js-cookie";
import { API_BASE_URL } from "../utils/constants";

const getProfile = async (id) => {
  const token = Cookie.get("jwt");

  if (!token) {
    throw new Error("Token not found");
  }

  const response = await fetch(`${API_BASE_URL}/users/${id}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    if (response.status === 401 || response.status === 403) {
      throw new Error("TokenExpired");
    }
    throw new Error("Error in server response");
  }

  const data = await response.json();

  return data;
};

const setProfile = async (id, profile) => {
  const token = Cookie.get("jwt");

  if (!token) {
    throw new Error("Token not found");
  }

  const response = await fetch(`${API_BASE_URL}/users/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(profile),
  });

  if (!response.ok) {
    if (response.status === 401 || response.status === 403) {
      throw new Error("TokenExpired");
    }
    throw new Error("Error in server response");
  }

  const data = await response.json();

  return data;
};

const UserService = {
  getProfile,
  setProfile,
};

export default UserService;

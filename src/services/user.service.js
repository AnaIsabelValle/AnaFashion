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

/*
 * Handles operations related to user profiles in a web application.
 * getProfile: This function is used to retrieve a user's profile from the server.
 * It takes the user ID as input and makes a GET request to the server to fetch the details
 * of the profile associated with that ID. It handles user authentication by checking for the presence
 * of an authentication token in the browser's cookies. If the request is successful, it returns the user profile data.
 * If there are any issues during the request, such as an invalid token or an incorrect server response, 
 * it properly handles errors and reports them.
 * setProfile: This function is used to update a user's profile on the server. It takes the user ID and the updated
 * profile data as input and makes a PATCH request to the server to update the profile details. Like getProfile, 
 * it verifies user authentication using the authentication token in the cookies. If the request is successful, 
 * it returns the updated user profile data. If there are any issues during the request, such as an 
 * invalid token or an incorrect server response, it properly handles errors and reports them.
 */

import Cookie from "js-cookie";
import { API_BASE_URL } from "../utils/constants";

const createOrder = async (order) => {
  const token = Cookie.get("jwt");

  if (!token) {
    throw new Error("Token not found");
  }

  const response = await fetch(`${API_BASE_URL}/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(order),
  });

  if (!response.ok) {
    if (response.status === 401) {
      throw new Error("TokenExpired");
    }
    throw new Error("Error saving order");
  }

  const data = await response.json();
  return data;
};

const OrderService = {
  createOrder,
};

export default OrderService;

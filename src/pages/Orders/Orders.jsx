import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { API_BASE_URL } from "../../utils/constants";

import useAuth from "../../hooks/useAuth";
import OrderItem from "./OrderItem";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const { isAuthenticated, user } = useAuth();
  const isAdmin = user.role === "Admin";

  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  useEffect(() => {
    const fetchOrders = async () => {
      const response = await fetch(
        `${API_BASE_URL}/orders${isAdmin ? "" : `?user=${user.id}`}`
      );

      const data = await response.json();

      setOrders(data);
    };

    fetchOrders();
  }, [user.id, isAdmin]);

  if (!orders.length) {
    return (
      <div className="card p-t-75 p-b-75">
        <div className="card-body cart">
          <div className="col-sm-12 empty-cart-cls text-center">
            <img
              src="images/icons/order.png"
              width="130"
              height="130"
              className="img-fluid mb-4 mr-3"
            />
            <h3>
              <strong>NO tienes compras aún</strong>
            </h3>
            <h4>Compra algo y me harás feliz :)</h4>
            <Link
              to="/"
              className="btn m-3 stext-101 cl0 bg3 bor14 hov-btn3 p-lr-15 trans-04 pointer"
              data-abc="true"
            >
              Continúa comprando
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="bg0 p-t-75 p-b-85">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 m-lr-auto m-b-50">
              <div className="m-l-25 m-r--38 m-lr-0-xl">
                <div className="wrap-table-orders">
                  <table className="table-orders">
                    <thead>
                      <tr className="table_head">
                        <th className="column-6">Detalle</th>
                        <th className="column-1">Pedido</th>
                        <th className="column-2">
                          Cdad. <br />
                          Productos
                        </th>
                        <th className="column-3">Método de Pago</th>
                        {isAdmin && <th className="column-3">Id. Cliente</th>}
                        <th className="column-4">Entregado</th>
                        <th className="column-5">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {orders.map((orderItem) => (
                        <OrderItem
                          key={orderItem.id}
                          order={orderItem}
                          isAdmin={isAdmin}
                        />
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Orders;


/*
 * This component is responsible for displaying a list of orders, 
 * including details such as order number, quantity of products, payment method, 
 * delivery status, and total. It interacts with the API to fetch orders and renders 
 * them in a table format.
 * 1.- Authentication Verification:
 * It uses the useAuth hook to check if the user is authenticated.
 * If the user is not authenticated, it redirects them to the login page using the navigate function.
 * 2.- Fetching Orders:
 * It utilizes the useEffect hook to fetch orders from the API when the component mounts or
 *  when there's a change in the user ID or isAdmin state.
 * If the user is an admin, it fetches all orders. Otherwise, it fetches orders associated with the current user.
 * The fetched orders are stored in the orders state using the setOrders function.
 * 3.- Rendering Orders:
 * If there are no orders available, it displays a message encouraging the user to make a purchase.
 * If there are orders available, it renders them in a table format.
 * Each order is represented by the OrderItem component, passing the order details and isAdmin state as props.
 * 4.- Table Structure:
 * The table displays headers for different order details such as order number, quantity of products, 
 * payment method, delivery status, and total.
 * For admin users, an additional column is shown for the customer ID.
 */
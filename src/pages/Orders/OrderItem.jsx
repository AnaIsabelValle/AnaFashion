import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const OrderItem = ({ order, isAdmin }) => {
  const { id, user, orderItems, paymentMethod, isDelivered, totalPrice } =
    order;

  return (
    <tr className="table_row" key={id}>
      <td className="column-6">
        <Link
          to={`/orders/${order.id}`}
          className="icon-header-item cl2 hov-cl1 trans-04"
        >
          <i className="zmdi zmdi-view-list-alt"></i>
        </Link>
      </td>
      <td className="column-1">{id}</td>
      <td className="column-2">{orderItems.length}</td>
      <td className="column-3">
        {paymentMethod === "" ? "No especificicado" : paymentMethod}
      </td>

      {isAdmin && <th className="column-3">{user}</th>}

      <td className="column-4">
        {isDelivered ? (
          <i className="zmdi zmdi-calendar-check"></i>
        ) : (
          <i className="zmdi zmdi-calendar-close"></i>
        )}
      </td>
      <td className="column-5">{totalPrice} €</td>
    </tr>
  );
};

export default OrderItem;

/*
 * This component efficiently handles the rendering of order details,
 * including conditional rendering for administrator users, displaying the payment method, 
 * indicating the delivery status, and providing a link to view the complete order details.
 */
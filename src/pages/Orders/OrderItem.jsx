import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const OrderItem = ({ order }) => {
  const { id, orderItems, paymentMethod, isDelivered, totalPrice } = order;

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
        {paymentMethod === "" ? "No especified" : paymentMethod}
      </td>
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

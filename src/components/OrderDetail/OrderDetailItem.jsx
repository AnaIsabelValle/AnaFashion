/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";

import { API_BASE_URL } from "../../utils/constants";

const OrderDetailItem = ({ orderItem }) => {
  const { product, name, price, quantity } = orderItem;
  const [image, setImage] = useState(null);

  useEffect(() => {
    const fecthProduct = async () => {
      const response = await fetch(`${API_BASE_URL}/products/${product}`);
      const data = await response.json();

      setImage(data.image);
    };

    fecthProduct();
  }, [product]);

  return (
    <tr className="table_row" key={product}>
      <td className="column-1">
        <div className="how-itemcart1">
          <img src={image} alt="IMG" />
        </div>
      </td>
      <td className="column-2">{name}</td>
      <td className="column-3">{price}€ </td>
      <td className="column-4">{quantity}</td>
      <td className="column-5">{(price * quantity).toFixed(2)} €</td>
    </tr>
  );
};

export default OrderDetailItem;

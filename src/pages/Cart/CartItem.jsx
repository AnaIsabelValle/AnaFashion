

/* eslint-disable react/prop-types */
const CartItem = ({ product, handleIncrement, handleDecrement }) => {
    const { id, name, image, price, amount } = product;
  
    return (
      <tr className="table_row" key={id}>
        <td className="column-1">
          <div className="how-itemcart1">
            <img src={image} alt="IMG" />
          </div>
        </td>
        <td className="column-2">{name}</td>
        <td className="column-3">{price}€ </td>
        <td className="column-4">
          <div className="wrap-num-product flex-w m-l-auto m-r-0">
            <div
              className="btn-num-product-down cl8 hov-btn3 trans-04 flex-c-m"
              onClick={() => handleDecrement(id)}
            >
              <i className="fs-16 zmdi zmdi-minus"></i>
            </div>
  
            <input
              className="mtext-104 cl3 txt-center num-product"
              type="text"
              name="num-product1"
              id={id}
              readOnly
              value={amount}
            />
  
            <div
              className="btn-num-product-up cl8 hov-btn3 trans-04 flex-c-m"
              onClick={() => handleIncrement(id)}
            >
              <i className="fs-16 zmdi zmdi-plus"></i>
            </div>
          </div>
        </td>
        <td className="column-5">{(price * amount).toFixed(2)} €</td>
      </tr>
    );
  };
  
  export default CartItem;

 /*
  * The CartItem component is responsible for rendering an item in the shopping cart.
  * Product Display:
  * It displays the image, name, price, and quantity of a product in the shopping cart.
  * It provides a visual representation of the product so that users can easily identify it.
  * Quantity Control:
  * It allows users to increase or decrease the quantity of a product in the cart using increment
  * and decrement buttons.
  * It utilizes the handleIncrement and handleDecrement events to modify the quantity of the product in the cart.
 */
   
  
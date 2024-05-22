import { useState, useEffect, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { CartContext } from "../../context/CartContext";
import OrderService from "../../services/order.service";
import UserService from "../../services/user.service";


function Checkout() {
  const { isAuthenticated, user, logoutUser } = useAuth();
  const { cart, total, clearCart } = useContext(CartContext);

  const navigate = useNavigate();

  let location = useLocation();
  let paypalOK = location.state?.paypalOK;

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    country: "",
    province: "",
    city: "",
    zipcode: "",
    address: "",
    phone: "",
  });

  const makeOrder = async () => {
    const orderItems = cart.map((item) => {
      return {
        product: item.id,
        name: item.name,
        quantity: item.amount,
        price: item.price,
      };
    });

    const userProfile = await UserService.getProfile(user.id);
    const userShipping = {
      name: userProfile.name,
      address: userProfile.address,
    };

    const order = {
      user: user.id,
      orderItems,
      shippingAddress: userShipping,
      totalPrice: total,
      paymentMethod: "paypal",
      isDelivered: false,
      deliveredAt: null,
    };

    return order;
  };

  useEffect(() => {
    const saveOrder = async () => {
      try {
        await OrderService.createOrder(await makeOrder());
      } catch (error) {
        console.error("Error al realizar el pedido:", error);
      }
    };

    if (paypalOK) {
      paypalOK = false; // Evita el doble renderizado
      saveOrder();
      clearCart();
      navigate("/finalpage");
    }
  }, [paypalOK, navigate, clearCart, makeOrder]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userProfile = await UserService.getProfile(user.id);

        setFormData({
          firstname: userProfile.name?.firstname || "",
          lastname: userProfile.name?.lastname || "",
          country: userProfile.address?.country || "",
          province: userProfile.address?.province || "",
          city: userProfile.address?.city || "",
          zipcode: userProfile.address?.zipcode || "",
          address: userProfile.address?.street || "",
          phone: userProfile?.phone || "",
        });
      } catch (error) {
        console.error(error);
        if (error.message === "TokenExpired") {
          logoutUser();
          navigate("/login");
        } else {
          console.log("Ha ocurrido un error al realizar la petición");
        }
      }
    };

    if (isAuthenticated) {
      fetchUserData();
    }
  }, [user, isAuthenticated, logoutUser, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleOrder = async () => {
    if (
        formData.firstname == "" ||
        formData.lastname == "" ||
        formData.country == "" ||
        formData.province == "" ||
        formData.city == "" ||
        formData.zipcode == "" ||
        formData.address == "" 
        ) {
          Swal.fire({
            icon: "error",
            title: `Todos los datos deben completarse`,
            showConfirmButton: false,
            timer: 1000,
          });
          return;
        }
    

    const shipping = {
      name: {
        firstname: formData.firstname,
        lastname: formData.lastname,
      },
      address: {
        country: formData.country,
        province: formData.province,
        city: formData.city,
        zipcode: formData.zipcode,
        street: formData.address,
      },
    };

    await UserService.setProfile(user.id, shipping);
    navigate("/paypal", { state: { previousPage: "/checkout" } });
  };

  return (
    <div className="container-fluid p-t-100 p-b-100">
      <div className="row px-xl-5">
        <div className="col-lg-8">
          <h5 className="section-title position-relative text-uppercase mb-3">
            <span>Detalle de facturación</span>
          </h5>
          <div className="bg-light p-30 mb-5">
            <div className="row">
              <div className="col-md-6 form-group">
                <label>Nombre</label>
                <input
                  className="form-control"
                  type="text"
                  name="firstname"
                  value={formData.firstname}
                  onChange={handleChange}
                  placeholder="Nombre"
                />
              </div>
              <div className="col-md-6 form-group">
                <label>Apellidos</label>
                <input
                  className="form-control"
                  type="text"
                  name="lastname"
                  value={formData.lastname}
                  onChange={handleChange}
                  placeholder="Apellidos"
                />
              </div>
              <div className="col-md-6 form-group">
                <label>Nº Teléfono</label>
                <input
                  className="form-control"
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Nº Teléfono"
                />
              </div>
              <div className="col-md-6 form-group">
                <label>País</label>
                <input
                  className="form-control"
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  placeholder="País"
                />
              </div>
              <div className="col-md-6 form-group">
                <label>Provincia/Estado</label>
                <input
                  className="form-control"
                  type="text"
                  name="province"
                  value={formData.province}
                  onChange={handleChange}
                  placeholder="Provincia/Estado"
                />
              </div>
              <div className="col-md-6 form-group">
                <label>Pueblo/Ciudad</label>
                <input
                  className="form-control"
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="Pueblo/Ciudad"
                />
              </div>
              <div className="col-md-6 form-group">
                <label>Dirección</label>
                <input
                  className="form-control"
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Dirección"
                />
              </div>
              <div className="col-md-6 form-group">
                <label>Código Postal / Zip</label>
                <input
                  className="form-control"
                  type="text"
                  name="zipcode"
                  value={formData.zipcode}
                  onChange={handleChange}
                  placeholder="Código Postal / Zip"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 m-lr-auto m-b-50">
          <div className="checkout__order">
            <h5 className="mtext-109 cl2 p-b-30">PEDIDO</h5>
            <div className="checkout__order__product">
              <ul>
                <li>
                  <span className="top__text">Productos</span>
                  <span className="top__text">Total</span>
                </li>

                {cart.map((cartItem, index) => (
                  <li key={cartItem.id}>
                    {("00" + (index + 1)).substring(
                      ("00" + (index + 1)).length - 2
                    )}
                    . {cartItem.name}{" "}
                    <span>
                      {(cartItem.price * cartItem.amount).toFixed(2)} €
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="checkout__order__total">
              <ul>
                <li>
                  Total <span>{total.toFixed(2)} €</span>
                </li>
              </ul>
            </div>

            <button
              className="flex-c-m stext-101 cl0 size-116 bg3 bor14 hov-btn3 p-lr-15 trans-04 pointer"
              onClick={handleOrder}
              disabled={cart.length === 0}
            >
              Realizar Pedido
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;


/*
 * The functionality of the Checkout component:
 * 1.- Initial Information Retrieval:
 * Functions: useAuth, CartContext.
 * Explanation: Retrieves information of the authenticated 
 * user and the items in the shopping cart.
 * 2.- Displaying the Billing Form:
 * Functions: useState, handleChange.
 * Explanation: Displays a form for the user to input billing details,
 * including name, address, and payment method.
 * 3.- Calculation and Display of Order Total:
 * Functions: CartContext.
 * Explanation: Calculates the order total and displays a list of cart 
 * items along with their individual prices.
 * 4.- Order Placement:
 * Functions: handleOrder.
 * Explanation: Allows the user to place the order by clicking the "Place Order" button.
 * 5.- Saving Shipping Information and Redirecting to PayPal:
 * Functions: handleOrder, UserService, navigate.
 * Explanation: Saves the shipping information entered by the user and redirects 
 * the user to the PayPal page to complete the payment.
 * 6.- Confirmation and Cart Clearing After Payment:
 * Functions: useEffect, OrderService, clearCart.
 * Explanation: After payment is confirmed on PayPal, saves the order and clears the shopping cart.
 * 7.- Redirection to Order Confirmation Page:
 * Functions: navigate.
 * Explanation: Finally, redirects the user to the order confirmation page
 */
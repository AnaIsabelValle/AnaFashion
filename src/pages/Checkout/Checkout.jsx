import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { API_BASE_URL } from '../../utils/constants';
import useAuth from "../../hooks/useAuth";
import { CartContext } from "../../context/CartContext";
// import UserService from "../../services/user.service";

function Checkout() {
    const { isAuthenticated, user, logoutUser } = useAuth();
    const { cart, total, clearCart } = useContext(CartContext);

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        country: '',
        province: '',
        city: '',
        zipcode: '',
        address: '',
        phone: "",
    });

    useEffect(() => {
        const fetchUserData = async () => {
            try {

                const userProfile = await UserService.getProfile(user.id);

                setFormData({
                    firstname: userProfile.name.firstname || '',
                    lastname: userProfile.name.lastname || '',
                    country: userProfile.address?.country || '',
                    province: userProfile.address?.province || '',
                    city: userProfile.address?.city || '',
                    codigoPostal: userProfile.address?.zipcode || '',
                    address: userProfile.address?.street || '',
                    phone: userProfile?.phone || '',

                });
            } catch (error) {
                console.error(error);
                if (error.message == "TokenExpired") {
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
    const handleOrder = () => {
        window.alert("Hola handleRealizarPedido..");
    };

    return (
        <div className="container-fluid">
            <div className="row px-xl-5">
                <div className="col-lg-8">
                    <h5 className="section-title position-relative text-uppercase mb-3">
                        <span>Detalle de facturación</span>
                    </h5>
                    <div className="bg-light p-30 mb-5">
                        <div className="row">
                            <div className="col-md-6 form-group">
                                <label>Nombre</label>
                                <input className="form-control" type="text" name="firstname" value={formData.firstname} onChange={handleChange} placeholder="Nombre" />
                            </div>
                            <div className="col-md-6 form-group">
                                <label>Apellidos</label>
                                <input className="form-control" type="text" name=" lastname" value={formData.apellidos} onChange={handleChange} placeholder="Apellidos" />
                            </div>
                            <div className="col-md-6 form-group">
                                <label>No Teléfono</label>
                                <input className="form-control" type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="No Teléfono" />
                            </div>

                            <div className="col-md-6 form-group">
                                <label>País</label>
                                <input className="form-control" type="text" name="country" value={formData.country} onChange={handleChange} placeholder="País" />
                            </div>
                            <div className="col-md-6 form-group">
                                <label>Provincia/Estado</label>
                                <input className="form-control" type="text" name=" province" value={formData.province} onChange={handleChange} placeholder="Provincia/Estado" />
                            </div>
                            <div className="col-md-6 form-group">
                                <label>Pueblo/Ciudad</label>
                                <input className="form-control" type="text" name="city" value={formData.city} onChange={handleChange} placeholder="Pueblo/Ciudad" />
                            </div>
                            <div className="col-md-6 form-group">
                                <label>Dirección</label>
                                <input className="form-control" type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Dirección" />
                            </div>
                            <div className="col-md-6 form-group">
                                <label>Código Postal / Zip</label>
                                <input className="form-control" type="text" name=" zipcode" value={formData.zipcode} onChange={handleChange} placeholder="Código Postal / Zip" />
                            </div>
                        </div>

                    </div>
                </div>
            
                <div className="col-lg-4 m-lr-auto m-b-50">
          <div className="checkoutorder">
            <h5 className="mtext-109 cl2 p-b-30">PEDIDO</h5>
            <div className="checkoutorderproduct">
              <ul>
                <li>
                  <span className="toptext">Productos</span>
                  <span className="toptext">Total</span>
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
            <div className="checkoutorder__total">
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
                {/* <div className="col-lg-4">
                    <div className="bor10 p-lr-40 p-t-30 p-b-40 m-l-63 m-r-40 m-lr-0-xl p-lr-15-sm">
                        <h4 className="mtext-109 cl2 p-b-30">
                            Total de la Cesta
                        </h4>
                        <div className="flex-w flex-t bor12 p-t-15 p-b-30">
                            <div className="size-208 w-full-ssm">
                                <span className="stext-110 cl2">
                                    Productos:
                                </span>
                            </div>
                            <div className="size-208 w-full-ssm">
                                <span className="stext-110 cl2">
                                    Total
                                </span>
                            </div>
                            <div className="size-208 w-full-ssm">
                                <span className="stext-110 cl2">
                                    Artículo 1.
                                </span>
                            </div>
                            <div className="size-208 w-full-ssm">
                                <span className="stext-110 cl2">
                                    40 €
                                </span>
                            </div>
                            <div className="size-208 w-full-ssm">
                                <span className="stext-110 cl2">
                                    Artículo 2
                                </span>
                            </div>
                            <div className="size-208 w-full-ssm">
                                <span className="stext-110 cl2">
                                    45 €
                                </span>
                            </div>
                        </div>
                        <div className="flex-w flex-t p-t-27 p-b-33">
                            <div className="size-208 d-flex align-items-center">
                                <span className="mtext-101 cl2">
                                    Subtotal
                                </span>
                            </div>
                            <div className="size-208 d-flex align-items-center">
                                <span className="mtext-101 cl2">
                                    85 €
                                </span>
                            </div>
                        </div>
                        <div className="size-208 d-flex align-items-center">
                            <span className="mtext-101 cl2">
                                Total
                            </span>
                            <span className="mtext-101 cl2 ml-auto">
                                85 €
                            </span>
                        </div>
                        <div className="mt-4">
                            <button className="flex-c-m stext-101 cl0 size-116 bg3 bor14 hov-btn3 p-lr-15 trans-04 pointer" onClick={handleRealizarPedido} >
                                Realizar Pedido
                            </button>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    );
}

export default Checkout;

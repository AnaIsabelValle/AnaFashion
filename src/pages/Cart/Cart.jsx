import { React, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { CartContext } from "../../context/CartContext";
import CartItem from './CartItem';

const Cart = () => {
    const { cart, total, increaseAmount, decreaseAmount } =
        useContext(CartContext);

    const handleIncrement = (id) => {
        increaseAmount(id);
    };

    const handleDecrement = (id) => {
        decreaseAmount(id);
    };

    if (!cart.length) {
        return (
            <div className="card p-t-75 p-b-75">
                <div className="card-body cart">
                    <div className="col-sm-12 empty-cart-cls text-center">
                        <img
                            src="images/icons/empty-cart.png"
                            width="130"
                            height="130"
                            className="img-fluid mb-4 mr-3"
                        />
                        <h3>
                            <strong>Your Cart is Empty</strong>
                        </h3>
                        <h4>Add something to make me happy :)</h4>
                        <Link
                            to="/"
                            className="btn m-3 stext-101 cl0 bg3 bor14 hov-btn3 p-lr-15 trans-04 pointer"
                            data-abc="true"
                        >
                            continue shopping
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    function checkout() {
        const navigate = useNavigate()
        navigate("/checkout")

    }
    return (
        <>
            {/* breadcrumb */}
            <div className="container">
                <div className="bread-crumb flex-w p-l-25 p-r-15 p-t-30 p-lr-0-lg">
                    <Link to={"/"} className="stext-109 cl8 hov-cl1 trans-04">
                        Principal
                        <i
                            className="fa fa-angle-right m-l-9 m-r-10"
                            aria-hidden="true"
                        ></i>
                    </Link>

                    <span className="stext-109 cl4">
                        Cesta
                    </span>
                </div>
            </div>


            {/* Shoping Cart */}
            <div className="bg0 p-t-75 p-b-85" >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 col-xl-7 m-lr-auto m-b-50">
                            <div className="m-l-25 m-r--38 m-lr-0-xl">
                                <div className="wrap-table-shopping-cart">
                                    <table className="table-shopping-cart">
                                        <thead>
                                            <tr className="table_head">
                                                <th className="column-1">Artículo</th>
                                                <th className="column-2"></th>
                                                <th className="column-3">Precio</th>
                                                <th className="column-4">Cantidad</th>
                                                <th className="column-5">Total</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {cart.map((cartItem) => (
                                                <CartItem
                                                    key={cartItem.id}
                                                    product={cartItem}
                                                    handleIncrement={handleIncrement}
                                                    handleDecrement={handleDecrement}
                                                />
                                            ))}
                                        </tbody>

                                    </table>
                                </div>

                                <div className="flex-w flex-sb-m bor15 p-t-18 p-b-15 p-lr-40 p-lr-15-sm">
                                    <div className="flex-c-m stext-101 cl2 size-119 bg8 bor13 hov-btn3 p-lr-15 trans-04 pointer m-tb-10">
                                        Actualización de la compra
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-10 col-lg-7 col-xl-5 m-lr-auto m-b-50">
                            <div className="bor10 p-lr-40 p-t-30 p-b-40 m-l-63 m-r-40 m-lr-0-xl p-lr-15-sm">
                                <h4 className="mtext-109 cl2 p-b-30">
                                    Total de la Cesta
                                </h4>

                                <div className="flex-w flex-t bor12 p-b-13">
                                    <div className="size-208">
                                        <span className="stext-110 cl2">
                                            Subtotal:
                                        </span>
                                    </div>

                                    <div className="size-209">
                                        <span className="mtext-110 cl2">
                                            79.65 €
                                        </span>
                                    </div>
                                </div>

                                <div className="flex-w flex-t bor12 p-t-15 p-b-30">
                                    <div className="size-208 w-full-ssm">
                                        <span className="stext-110 cl2">
                                            Envío:
                                        </span>
                                    </div>

                                    <div className="size-209 p-r-18 p-r-0-sm w-full-ssm">
                                        <p className="stext-111 cl6 p-t-2">
                                            No hay métodos de envío disponibles. Por favor verifique su dirección o contáctenos si necesita ayuda.
                                        </p>
                                        <div className="p-t-15">
                                            <span className="stext-112 cl8">
                                                Calcular gastos de envío
                                            </span>

                                            <div className="rs1-select2 rs2-select2 bor8 bg0 m-b-12 m-t-9">
                                                <select className="js-select2" name="time" >
                                                    <option>Seleccione un país...</option>
                                                    <option defaultChecked>ESPAÑA</option>
                                                    <option>PORTUGAL</option>
                                                </select>
                                                <div className="dropDownSelect2"></div>
                                            </div>

                                            <div className="bor8 bg0 m-b-12">
                                                <input className="stext-111 cl8 plh3 size-111 p-lr-15" type="text" name="state" placeholder="País" />
                                            </div>

                                            <div className="bor8 bg0 m-b-22">
                                                <input className="stext-111 cl8 plh3 size-111 p-lr-15" type="text" name="postcode" placeholder="Codigo Postal" />
                                            </div>

                                            <div className="flex-w">
                                                <div className="flex-c-m stext-101 cl2 size-115 bg8 bor13 hov-btn3 p-lr-15 trans-04 pointer">
                                                    Actualizar Total
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex-w flex-t p-t-27 p-b-33">
                                    <div className="size-208">
                                        <span className="mtext-101 cl2">
                                            Total:
                                        </span>
                                    </div>

                                    <div className="size-209 p-t-1">
                                        <span className="mtext-110 cl2">
                                            79.65 €
                                        </span>
                                    </div>
                                </div>
                            </div> <Link className="flex-c-m stext-101 cl0 size-116 bg3 bor14 hov-btn3 p-lr-15 trans-04 pointer" to={"/checkout"}> Pasar por Caja</Link>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
}

export default Cart;

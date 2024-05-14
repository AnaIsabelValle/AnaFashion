import { React, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { CartContext } from "../../context/CartContext";
import CartItem from './CartItem';

const Cart = () => {
    const { cart, total, increaseAmount, decreaseAmount } =
        useContext(CartContext);

    const navigate = useNavigate();

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
                            <strong>Tu carrito esta vacío</strong>
                        </h3>
                        <h4>Agrega algo que me haga feliz :)</h4>
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

    function handleCheckout() {
        navigate("/checkout");
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
                            </div>
                        </div>

                        <div className="col-sm-10 col-lg-7 col-xl-5 m-lr-auto m-b-50">
                            <div className="bor10 p-lr-40 p-t-30 p-b-40 m-l-63 m-r-40 m-lr-0-xl p-lr-15-sm">
                                <h4 className="mtext-109 cl2 p-b-30 bor12">
                                    Total de la Cesta
                                </h4>                     
                                <div className="flex-w flex-t p-t-27 p-b-33">
                                    <div className="size-208">
                                        <span className="mtext-101 cl2">
                                            Total:
                                        </span>
                                    </div>

                                    <div className="size-209 p-t-1">
                                        <span className="mtext-110 cl2">
                                            {total.toFixed(2)} €
                                        </span>
                                    </div>
                                </div>
                                <button className="flex-c-m stext-101 cl0 size-116 bg3 bor14 hov-btn3 p-lr-15 trans-04 pointer" onClick={handleCheckout}> Pasar por Caja</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
}

export default Cart;

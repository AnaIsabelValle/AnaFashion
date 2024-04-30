import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


const Cart = () => {

    function paypal() {
        const navigate = useNavigate()
        navigate("/paypal")

    }
    return (
        <div>
            {/* Cart */}
            <div className="wrap-header-cart js-panel-cart">
                <div className="s-full js-hide-cart"></div>

                <div className="header-cart flex-col-l p-l-65 p-r-25">
                    <div className="header-cart-title flex-w flex-sb-m p-b-8">
                        <span className="mtext-103 cl2">
                            Tu carrito
                        </span>

                        <div className="fs-35 lh-10 cl2 p-lr-5 pointer hov-cl1 trans-04 js-hide-cart">
                            <i className="zmdi zmdi-close"></i>
                        </div>
                    </div>

                    <div className="header-cart-content flex-w js-pscroll">
                        <ul className="header-cart-wrapitem w-full">
                            <li className="header-cart-item flex-w flex-t m-b-12">
                                <div className="header-cart-item-img">
                                    <img src="images/item-cart-01.jpg" alt="IMG" />
                                </div>

                                <div className="header-cart-item-txt p-t-8">
                                    <a href="#" className="header-cart-item-name m-b-18 hov-cl1 trans-04">
                                        White Shirt Pleat
                                    </a>

                                    <span className="header-cart-item-info">
                                        1 x $19.00
                                    </span>
                                </div>
                            </li>

                            <li className="header-cart-item flex-w flex-t m-b-12">
                                <div className="header-cart-item-img">
                                    <img src="images/item-cart-02.jpg" alt="IMG" />
                                </div>

                                <div className="header-cart-item-txt p-t-8">
                                    <a href="#" className="header-cart-item-name m-b-18 hov-cl1 trans-04">
                                        Converse All Star
                                    </a>

                                    <span className="header-cart-item-info">
                                        1 x $39.00
                                    </span>
                                </div>
                            </li>

                            <li className="header-cart-item flex-w flex-t m-b-12">
                                <div className="header-cart-item-img">
                                    <img src="images/item-cart-03.jpg" alt="IMG" />
                                </div>

                                <div className="header-cart-item-txt p-t-8">
                                    <a href="#" className="header-cart-item-name m-b-18 hov-cl1 trans-04">
                                        Nixon Porter Leather
                                    </a>

                                    <span className="header-cart-item-info">
                                        1 x $17.00
                                    </span>
                                </div>
                            </li>
                        </ul>

                        <div className="w-full">
                            <div className="header-cart-total w-full p-tb-40">
                                Total: $75.00
                            </div>

                            <div className="header-cart-buttons flex-w w-full">
                                <a href="cart" className="flex-c-m stext-101 cl0 size-107 bg3 bor2 hov-btn3 p-lr-15 trans-04 m-r-8 m-b-10">
                                    View Cart
                                </a>

                                <a href="cart" className="flex-c-m stext-101 cl0 size-107 bg3 bor2 hov-btn3 p-lr-15 trans-04 m-b-10">
                                    Check Out
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* breadcrumb */}
            <div className="container">
                <div className="bread-crumb flex-w p-l-25 p-r-15 p-t-30 p-lr-0-lg">
                    <a href="index.html" className="stext-109 cl8 hov-cl1 trans-04">
                        Principal
                        <i className="fa fa-angle-right m-l-9 m-r-10" aria-hidden="true"></i>
                    </a>

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
                                            <tr className="table_row">
                                                <td className="column-1">
                                                    <div className="how-itemcart1">
                                                        <img src="images/item-cart-04.jpg" alt="IMG" />
                                                    </div>
                                                </td>
                                                <td className="column-2">Fresas frescas</td>
                                                <td className="column-3">36.00 €</td>
                                                <td className="column-4">
                                                    <div className="wrap-num-product flex-w m-l-auto m-r-0">
                                                        <div className="btn-num-product-down cl8 hov-btn3 trans-04 flex-c-m">
                                                            <i className="fs-16 zmdi zmdi-minus"></i>
                                                        </div>

                                                        <input className="mtext-104 cl3 txt-center num-product" type="number" name="num-product1" value="1" />

                                                        <div className="btn-num-product-up cl8 hov-btn3 trans-04 flex-c-m">
                                                            <i className="fs-16 zmdi zmdi-plus"></i>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="column-5">36.00 €</td>
                                            </tr>

                                            <tr className="table_row">
                                                <td className="column-1">
                                                    <div className="how-itemcart1">
                                                        <img src="images/item-cart-05.jpg" alt="IMG" />
                                                    </div>
                                                </td>
                                                <td className="column-2">Chaqueta ligera</td>
                                                <td className="column-3">16.00 €</td>
                                                <td className="column-4">
                                                    <div className="wrap-num-product flex-w m-l-auto m-r-0">
                                                        <div className="btn-num-product-down cl8 hov-btn3 trans-04 flex-c-m">
                                                            <i className="fs-16 zmdi zmdi-minus"></i>
                                                        </div>

                                                        <input className="mtext-104 cl3 txt-center num-product" type="number" name="num-product2" value="1" />

                                                        <div className="btn-num-product-up cl8 hov-btn3 trans-04 flex-c-m">
                                                            <i className="fs-16 zmdi zmdi-plus"></i>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="column-5">16.00 €</td>
                                            </tr>
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

                               
                            </div> <Link className="flex-c-m stext-101 cl0 size-116 bg3 bor14 hov-btn3 p-lr-15 trans-04 pointer" to={"/paypal"}> Pasar por Caja</Link>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    );
}

export default Cart;

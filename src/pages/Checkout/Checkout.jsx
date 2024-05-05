import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Checkout() {
    const navigate = useNavigate();
    navigate("/paypal");

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
                                <input className="form-control" type="text" placeholder="Nombre" />
                            </div>
                            <div className="col-md-6 form-group">
                                <label>Apellidos</label>
                                <input className="form-control" type="text" placeholder="Apellidos" />
                            </div>
                            <div className="col-md-6 form-group">
                                <label>E-mail</label>
                                <input className="form-control" type="email" placeholder="Email" />
                            </div>
                            <div className="col-md-6 form-group">
                                <label>No Teléfono</label>
                                <input className="form-control" type="text" placeholder="No Teléfono" />
                            </div>
                            <div className="col-md-6 form-group">
                                <label>País</label>
                                <input className="form-control" type="text" placeholder="País" />
                            </div>
                            <div className="col-md-6 form-group">
                                <label>Provincia/Estado</label>
                                <input className="form-control" type="text" placeholder="Provincia/Estado" />
                            </div>
                            <div className="col-md-6 form-group">
                                <label>Pueblo/Ciudad</label>
                                <input className="form-control" type="text" placeholder="Pueblo/Ciudad" />
                            </div>
                            <div className="col-md-6 form-group">
                                <label>Dirección</label>
                                <input className="form-control" type="text" placeholder="Dirección" />
                            </div>
                            <div className="col-md-6 form-group">
                                <label>Código Postal / Zip</label>
                                <input className="form-control" type="text" placeholder="Código Postal / Zip" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
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
                            <Link className="flex-c-m stext-101 cl0 size-116 bg3 bor14 hov-btn3 p-lr-15 trans-04 pointer" to={"/checkout"}>
                                Realizar Pedido
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Checkout;

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { API_BASE_URL } from '../../utils/constants';


const ProductDetail = () => {
    const { id } = useParams()
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const getProduct = async () => {
            try {
                const response = await fetch(`${API_BASE_URL}/products/${id}`)
                const product = await response.json()
                setProduct(product)
            } catch (error) {
                console.error(error)
            }
        }
        getProduct()
    }, [id])

    return (
        <div>
            {/* breadcrumb */}
            {/* <div className="container">
                <div className="bread-crumb flex-w p-l-25 p-r-15 p-t-30 p-lr-0-lg">
                    <a href="index.html" className="stext-109 cl8 hov-cl1 trans-04">
                        Home
                        <i className="fa fa-angle-right m-l-9 m-r-10" aria-hidden="true"></i>
                    </a>

                    <a href="product.html" className="stext-109 cl8 hov-cl1 trans-04">
                        Hombre
                        <i className="fa fa-angle-right m-l-9 m-r-10" aria-hidden="true"></i>
                    </a>

                    <span className="stext-109 cl4">
                        Chaqueta ligera
                    </span>
                </div>
            </div>
 */}
            {/* Product Detail */}
            <section className="sec-product-detail bg0 p-t-65 p-b-60">
                <div className="container">
                    <div className="row">
                        {/* <div className="col-md-6 col-lg-7 p-b-30">
                            <div className="p-l-25 p-r-30 p-lr-0-lg">
                                <div className="wrap-slick3 flex-sb flex-w">
                                    <div className="wrap-slick3-dots"></div>
                                    <div className="wrap-slick3-arrows flex-sb-m flex-w"></div>

                                    <div className="slick3 gallery-lb">
                                        <div className="item-slick3" data-thumb="images/product-detail-01.jpg">
                                            <div className="wrap-pic-w pos-relative">
                                                <img src="images/product-detail-01.jpg" alt="IMG-PRODUCT" /> */}

                        {/* <a className="flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3 trans-04" href="images/product-detail-01.jpg">
                                                    <i className="fa fa-expand"></i>
                                                </a> */}
                        {/* </div>
                                        </div> */}
                        {/* 
                                        <div className="item-slick3" data-thumb="images/product-detail-02.jpg">
                                            <div className="wrap-pic-w pos-relative">
                                                <img src="images/product-detail-02.jpg" alt="IMG-PRODUCT" />

                                                <a className="flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3 trans-04" href="images/product-detail-02.jpg">
                                                    <i className="fa fa-expand"></i>
                                                </a>
                                            </div>
                                        </div>

                                        <div className="item-slick3" data-thumb="images/product-detail-03.jpg">
                                            <div className="wrap-pic-w pos-relative">
                                                <img src="images/product-detail-03.jpg" alt="IMG-PRODUCT" />

                                                <a className="flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3 trans-04" href="images/product-detail-03.jpg">
                                                    <i className="fa fa-expand"></i>
                                                </a> 
                                            </div>
                                        </div> */}
                        {/*      </div>
                                </div>
                            </div> */}
                        {/* </div> */}

                        <div className="col-md-6 col-lg-5 p-b-30">
                            <div className="p-r-50 p-t-5 p-lr-0-lg">
                                <h4 className="mtext-105 cl2 js-name-detail p-b-14">
                                    {product.name}
                                </h4>

                                <span className="mtext-106 cl2">
                                    {product.price} €
                                </span>

                                <p className="stext-102 cl3 p-t-23">
                                    {product.description}
                                </p>

                                <div className="p-t-33">
                                    {/* <div className="flex-w flex-r-m p-b-10"> */}
                                    {/* <div className="size-203 flex-c-m respon6">
                                            Tamaño
                                        </div>
                                        */}
                                    {/* <div className="size-204 respon6-next"> */}
                                    {/* <div className="rs1-select2 bor8 bg0"> */}
                                    {/* <select className="js-select2" name="time">
                                                    <option>Elige una opción</option>
                                                    <option>S</option>
                                                    <option>M</option>
                                                    <option>L</option>
                                                    <option>XL</option>
                                                </select> */}
                                    {/* <div className="dropDownSelect2"></div> */}
                                    {/* </div> */}
                                    {/* </div> */}
                                    {/* </div> */}

                                    {/* <div className="flex-w flex-r-m p-b-10">
                                        <div className="size-203 flex-c-m respon6">
                                            Color
                                        </div>

                                        <div className="size-204 respon6-next">
                                            <div className="rs1-select2 bor8 bg0">
                                                <select className="js-select2" name="time">
                                                    <option>Elige una opción</option>
                                                    <option>Rojo</option>
                                                    <option>Azul</option>
                                                    <option>Blanco</option>
                                                    <option>Gris</option>
                                                </select>
                                                <div className="dropDownSelect2"></div>
                                            </div>
                                        </div>
                                    </div> */}

                                    <div className="flex-w flex-r-m p-b-10">
                                        <div className="size-204 flex-w flex-m respon6-next">
                                            <label className='cantidad'>Cantidad</label>
                                            <div className="wrap-num-product flex-w m-r-20 m-tb-10">
                                                <div className="btn-num-product-down cl8 hov-btn3 trans-04 flex-c-m">
                                                    <i className="fs-16 zmdi zmdi-minus"></i>
                                                </div>
                                                <input className="mtext-104 cl3 txt-center num-product" type="number" name="num-product" value="1" />

                                                <div className="btn-num-product-up cl8 hov-btn3 trans-04 flex-c-m">
                                                    <i className="fs-16 zmdi zmdi-plus"></i>
                                                </div>
                                            </div>

                                            <button className="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04 js-addcart-detail">
                                                Añadir a la cesta
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ProductDetail;



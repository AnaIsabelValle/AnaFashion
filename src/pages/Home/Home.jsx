import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import '../Products/Products.css';
import '../../css/util.css';
import '../../css/main.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Products = () => {
    const [filter, setFilter] = useState('*');

    const productsData = [
        {
            name: 'Camisa Blanca',
            category: ['*'],
            price: 35.0,
            image: 'images/product-01.jpg', // Ajustar la ruta de la imagen
        },
        {
            name: 'Blusa Blanca',
            category: ['*'],
            price: 40.0,
            image: 'images/product-02.jpg', // Ajustar la ruta de la imagen
        },
        {
            name: 'Blusa Azul',
            category: ['*'],
            price: 45.0,
            image: 'images/product-03.jpg', // Ajustar la ruta de la imagen
        },
        {
            name: 'Abrigo marrón',
            category: ['*'],
            price: 50.0,
            image: 'images/product-04.jpg', // Ajustar la ruta de la imagen
        },
        {
            name: 'Blusa gris',
            category: ['*'],
            price: 55.0,
            image: 'images/product-05.jpg', // Ajustar la ruta de la imagen
        },
    ];

    return (
        <div>
            <div className="sec-banner bg0 p-t-80 p-b-50">
                <div className="container">
                    <div className="p-b-32">
                        <h3 className="ltext-105 cl5 txt-center respon1">Lista de Artículos</h3>
                    </div>
                </div>
            </div>

            <div className="sec-product bg0 p-t-50 p-b-50">
                <div className="container">
                    <div className="flex-w flex-sb-m p-b-52">
                        <div className="flex-w flex-c-m m-tb-10">
                            <div
                                className="panel-filter p-t-10 p-b-10"
                                style={{ display: 'none', width: '100%' }}
                            >
                                <div className="wrap-filter flex-w bg6 w-full p-lr-40 p-t-27 p-lr-15-sm">
                                    <div className="filter-col1 p-r-15 p-b-27">
                                        <div className="mtext-102 cl2 p-b-15">Sort By</div>
                                        <ul>
                                            <li className="p-b-6">
                                                <a href="#" className="filter-link stext-106 trans-04">
                                                    Por Defecto
                                                </a>
                                            </li>
                                            <li className="p-b-6">
                                                <a href="#" className="filter-link stext-106 trans-04">
                                                    Popularidad
                                                </a>
                                            </li>
                                            <li className="p-b-6">
                                                <a href="#" className="filter-link stext-106 trans-04">
                                                    Puntuación Media
                                                </a>
                                            </li>
                                            <li className="p-b-6">
                                                <a href="#" className="filter-link stext-106 trans-04">
                                                    Novedad
                                                </a>
                                            </li>
                                            <li className="p-b-6">
                                                <a href="#" className="filter-link stext-106 trans-04">
                                                    Precios: De Barato a Caro
                                                </a>
                                            </li>
                                            <li className="p-b-6">
                                                <a href="#" className="filter-link stext-106 trans-04">
                                                    Precio: De Mayor a Menor
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="filter-col2 p-r-15 p-b-27">
                                        <div className="mtext-102 cl2 p-b-15">Price</div>
                                        <ul>
                                            <li className="p-b-6">
                                                <a href="#" className="filter-link stext-106 trans-04">
                                                    0.00 € - 50.00 €
                                                </a>
                                            </li>
                                            <li className="p-b-6">
                                                <a href="#" className="filter-link stext-106 trans-04">
                                                    50.00 €  - 100.00  €
                                                </a>
                                            </li>
                                            <li className="p-b-6">
                                                <a href="#" className="filter-link stext-106 trans-04">
                                                    100.00 € - 150.00  €
                                                </a>
                                            </li>
                                            <li className="p-b-6">
                                                <a href="#" className="filter-link stext-106 trans-04">
                                                    150.00  € - 200.00  €
                                                </a>
                                            </li>
                                            <li className="p-b-6">
                                                <a href="#" className="filter-link stext-106 trans-04">
                                                    +200.00  €
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="filter-col3 p-r-15 p-b-27">
                                        <div className="mtext-102 cl2 p-b-15">Color</div>
                                        <ul>
                                            <li className="p-b-6">
                                                <span className="fs-15 lh-12 m-r-6" style={{ color: '#222' }}>
                                                    <i className="zmdi zmdi-circle"></i>
                                                </span>
                                                <a href="#" className="filter-link stext-106 trans-04">
                                                    Negro
                                                </a>
                                            </li>
                                            <li className="p-b-6">
                                                <span className="fs-15 lh-12 m-r-6" style={{ color: '#4272d7' }}>
                                                    <i className="zmdi zmdi-circle"></i>
                                                </span>
                                                <a href="#" className="filter-link stext-106 trans-04">
                                                    Azul
                                                </a>
                                            </li>
                                            <li className="p-b-6">
                                                <span className="fs-15 lh-12 m-r-6" style={{ color: '#b3b3b3' }}>
                                                    <i className="zmdi zmdi-circle"></i>
                                                </span>
                                                <a href="#" className="filter-link stext-106 trans-04">
                                                    Gris
                                                </a>
                                            </li>
                                            <li className="p-b-6">
                                                <span className="fs-15 lh-12 m-r-6" style={{ color: '#00ad5f' }}>
                                                    <i className="zmdi zmdi-circle"></i>
                                                </span>
                                                <a href="#" className="filter-link stext-106 trans-04">
                                                    Verde
                                                </a>
                                            </li>
                                            <li className="p-b-6">
                                                <span className="fs-15 lh-12 m-r-6" style={{ color: '#fa4251' }}>
                                                    <i className="zmdi zmdi-circle"></i>
                                                </span>
                                                <a href="#" className="filter-link stext-106 trans-04">
                                                    Rojo
                                                </a>
                                            </li>
                                            <li className="p-b-6">
                                                <span className="fs-15 lh-12 m-r-6" style={{ color: '#aaa' }}>
                                                    <i className="zmdi zmdi-circle-o"></i>
                                                </span>
                                                <a href="#" className="filter-link stext-106 trans-04">
                                                    Blanco
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row isotope-grid">
                        {productsData.map((product, index) => (
                            <div
                                key={index}
                                className={`col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item ${product.category.join(
                                    ' '
                                )}`}
                            >
                                <div className="block2">
                                    <div className="block2-pic hov-img0">
                                        <img src={product.image} alt="IMG-PRODUCT" />
                                        <a href="#" className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1">
                                            Vista Rápida
                                        </a>
                                    </div>

                                    <div className="block2-txt flex-w flex-t p-t-14">
                                        <div className="block2-txt-child1 flex-col-l ">
                                            <a
                                                href="#"
                                                className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6"
                                            >
                                                {product.name}
                                            </a>

                                            <span className="stext-105 cl3">{`${product.price}€`}</span>
                                        </div>

                                        <div className="block2-txt-child2 flex-r p-t-3">
                                            <a
                                                href="#"
                                                className="btn-addwish-b2 dis-block pos-relative js-addwish-b2"
                                            >
                                                <img
                                                    className="icon-heart1 dis-block trans-04"
                                                    src="images/icons/icon-heart-01.png"
                                                    alt="ICON"
                                                />
                                                <img
                                                    className="icon-heart2 dis-block trans-04 ab-t-l"
                                                    src="images/icons/icon-heart-02.png"
                                                    alt="ICON"
                                                />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

const Home = () => {
    const [filter, setFilter] = useState('*');

    return (
        <div>
            {/* Cart */}
            <div className="wrap-header-cart js-panel-cart">
                <div className="s-full js-hide-cart"></div>

                <div className="header-cart flex-col-l p-l-65 p-r-25">
                    <div className="header-cart-title flex-w flex-sb-m p-b-8">
                        <span className="mtext-103 cl2">
                            Tu Cesta
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
                                        Camisa Blanca Plisada
                                    </a>

                                    <span className="header-cart-item-info">
                                        1 x 19.00 €
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
                                        1 x 39.00 €
                                    </span>
                                </div>
                            </li>

                            <li className="header-cart-item flex-w flex-t m-b-12">
                                <div className="header-cart-item-img">
                                    <img src="images/item-cart-03.jpg" alt="IMG" />
                                </div>

                                <div className="header-cart-item-txt p-t-8">
                                    <a href="#" className="header-cart-item-name m-b-18 hov-cl1 trans-04">
                                        Cuero Nixon Porter
                                    </a>

                                    <span className="header-cart-item-info">
                                        1 x 17.00 €
                                    </span>
                                </div>
                            </li>
                        </ul>

                        <div className="w-full">
                            <div className="header-cart-total w-full p-tb-40">
                                Total: 75.00 €
                            </div>

                            <div className="header-cart-buttons flex-w w-full">
                                <a href="shoping-cart.html" className="flex-c-m stext-101 cl0 size-107 bg3 bor2 hov-btn3 p-lr-15 trans-04 m-r-8 m-b-10">
                                    Ver Cesta
                                </a>

                                <a href="shoping-cart.html" className="flex-c-m stext-101 cl0 size-107 bg3 bor2 hov-btn3 p-lr-15 trans-04 m-b-10">
                                    Verificar
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Slider */}
            <section className="section-slide">
                <div className="wrap-slick1">
                    <Carousel showArrows={true} infiniteLoop={true} showThumbs={false}>
                        <div className="item-slick1" style={{ backgroundImage: "url(images/slide-01.jpg)" }}>
                            <div className="container h-full">
                                <div className="flex-col-l-m h-full p-t-100 p-b-30 respon5">
                                    <div className="layer-slick1 animated visible-false" data-appear="fadeInDown" data-delay="0">
                                        <span className="ltext-101 cl2 respon2">
                                            Colección Mujer 2.024
                                        </span>
                                    </div>

                                    <div className="layer-slick1 animated visible-false" data-appear="fadeInUp" data-delay="800">
                                        <h2 className="ltext-201 cl2 p-t-19 p-b-43 respon1">
                                            NUEVA TEMPORADA
                                        </h2>
                                    </div>

                                    <div className="layer-slick1 animated visible-false" data-appear="zoomIn" data-delay="1600">
                                        <a href="product.html" className="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04">
                                            Compra Ahora
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="item-slick1" style={{ backgroundImage: "url(images/slide-02.jpg)" }}>
                            <div className="container h-full">
                                <div className="flex-col-l-m h-full p-t-100 p-b-30 respon5">
                                    <div className="layer-slick1 animated visible-false" data-appear="rollIn" data-delay="0">
                                        <span className="ltext-101 cl2 respon2">
                                            Nueva Temporada Hombres
                                        </span>
                                    </div>

                                    <div className="layer-slick1 animated visible-false" data-appear="lightSpeedIn" data-delay="800">
                                        <h2 className="ltext-201 cl2 p-t-19 p-b-43 respon1">
                                            Chaquetas y Abrigos
                                        </h2>
                                    </div>

                                    <div className="layer-slick1 animated visible-false" data-appear="slideInUp" data-delay="1600">
                                        <a href="product.html" className="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04">
                                            Compra Ahora
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="item-slick1" style={{ backgroundImage: "url(images/slide-03.jpg)" }}>
                            <div className="container h-full">
                                <div className="flex-col-l-m h-full p-t-100 p-b-30 respon5">
                                    <div className="layer-slick1 animated visible-false" data-appear="rotateInDownLeft" data-delay="0">
                                        <span className="ltext-101 cl2 respon2">
                                            Collección Hombre 2.024
                                        </span>
                                    </div>

                                    <div className="layer-slick1 animated visible-false" data-appear="rotateInUpRight" data-delay="800">
                                        <h2 className="ltext-201 cl2 p-t-19 p-b-43 respon1">
                                            Recién Llegados
                                        </h2>
                                    </div>

                                    <div className="layer-slick1 animated visible-false" data-appear="rotateIn" data-delay="1600">
                                        <a href="product.html" className="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04">
                                            Compra Ahora
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Carousel>
                </div>
            </section>

            <Products />
        </div>
    );
}

export default Home;

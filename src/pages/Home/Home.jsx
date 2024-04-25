import React, { useState } from 'react';
import Hero from '../../components/Hero/Hero';
import Products from '../Products/Products';
import ProductList from '../../components/ProductList/ProductList';

/*
const Products = () => {

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
                        <h3 className="ltext-105 cl5 txt-center respon1">Novedades</h3>
                    </div>
                </div>
            </div>

            <div className="sec-product bg0 p-t-50 p-b-50">
                <div className="container">
                    <div className="flex-w flex-sb-m p-b-52">
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
*/
const Home = () => {

    return (
        <>
            <Hero />
            <div className="sec-banner bg0 p-t-80 p-b-50">
                <div className="container">
                    <div className="p-b-32">
                        <h3 className="ltext-105 cl5 txt-center respon1">Novedades</h3>
                    </div>
                </div>
            </div>
            <ProductList />
        </>
    );
}

export default Home;

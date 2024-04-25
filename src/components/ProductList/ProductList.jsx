import { useState } from "react";


const ProductList = () => {
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
        <>
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
                                                    Default
                                                </a>
                                            </li>
                                            <li className="p-b-6">
                                                <a href="#" className="filter-link stext-106 trans-04">
                                                    Popularity
                                                </a>
                                            </li>
                                            <li className="p-b-6">
                                                <a href="#" className="filter-link stext-106 trans-04">
                                                    Average rating
                                                </a>
                                            </li>
                                            <li className="p-b-6">
                                                <a href="#" className="filter-link stext-106 trans-04">
                                                    Newness
                                                </a>
                                            </li>
                                            <li className="p-b-6">
                                                <a href="#" className="filter-link stext-106 trans-04">
                                                    Price: Low to High
                                                </a>
                                            </li>
                                            <li className="p-b-6">
                                                <a href="#" className="filter-link stext-106 trans-04">
                                                    Price: High to Low
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="filter-col2 p-r-15 p-b-27">
                                        <div className="mtext-102 cl2 p-b-15">Price</div>
                                        <ul>
                                            <li className="p-b-6">
                                                <a href="#" className="filter-link stext-106 trans-04">
                                                    $0.00 - $50.00
                                                </a>
                                            </li>
                                            <li className="p-b-6">
                                                <a href="#" className="filter-link stext-106 trans-04">
                                                    $50.00 - $100.00
                                                </a>
                                            </li>
                                            <li className="p-b-6">
                                                <a href="#" className="filter-link stext-106 trans-04">
                                                    $100.00 - $150.00
                                                </a>
                                            </li>
                                            <li className="p-b-6">
                                                <a href="#" className="filter-link stext-106 trans-04">
                                                    $150.00 - $200.00
                                                </a>
                                            </li>
                                            <li className="p-b-6">
                                                <a href="#" className="filter-link stext-106 trans-04">
                                                    $200.00+
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
                                                    Black
                                                </a>
                                            </li>
                                            <li className="p-b-6">
                                                <span className="fs-15 lh-12 m-r-6" style={{ color: '#4272d7' }}>
                                                    <i className="zmdi zmdi-circle"></i>
                                                </span>
                                                <a href="#" className="filter-link stext-106 trans-04">
                                                    Blue
                                                </a>
                                            </li>
                                            <li className="p-b-6">
                                                <span className="fs-15 lh-12 m-r-6" style={{ color: '#b3b3b3' }}>
                                                    <i className="zmdi zmdi-circle"></i>
                                                </span>
                                                <a href="#" className="filter-link stext-106 trans-04">
                                                    Grey
                                                </a>
                                            </li>
                                            <li className="p-b-6">
                                                <span className="fs-15 lh-12 m-r-6" style={{ color: '#00ad5f' }}>
                                                    <i className="zmdi zmdi-circle"></i>
                                                </span>
                                                <a href="#" className="filter-link stext-106 trans-04">
                                                    Green
                                                </a>
                                            </li>
                                            <li className="p-b-6">
                                                <span className="fs-15 lh-12 m-r-6" style={{ color: '#fa4251' }}>
                                                    <i className="zmdi zmdi-circle"></i>
                                                </span>
                                                <a href="#" className="filter-link stext-106 trans-04">
                                                    Red
                                                </a>
                                            </li>
                                            <li className="p-b-6">
                                                <span className="fs-15 lh-12 m-r-6" style={{ color: '#aaa' }}>
                                                    <i className="zmdi zmdi-circle-o"></i>
                                                </span>
                                                <a href="#" className="filter-link stext-106 trans-04">
                                                    White
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
        </>
    )
}

export default ProductList
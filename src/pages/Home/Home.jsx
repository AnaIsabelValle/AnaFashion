import React, { useEffect, useState } from 'react';
import Hero from '../../components/Hero/Hero';
import { API_BASE_URL } from '../../utils/constants';
import ProductCard from '../../components/ProductCard/ProductCard';

const Home = () => {
    const [homeProducts, setHomeProducts] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            const response = await fetch(
                `${API_BASE_URL}/products?_sort=-created_at&_page=${page}&_limit=8`
            );

            const products = await response.json();
            if (page === 1) {
                setHomeProducts(products);
            } else {
                setHomeProducts((prevProducts) => [...prevProducts, ...products]);
            }
            setLoading(false);
        };
        fetchProducts();
    }, [page]);

    return (
        <>
            <Hero />
            <div className="sec-banner bg0 p-t-80 p-b-50">
                <div className="container">
                    <div className="p-b-32">
                        <h3 className="ltext-105 cl5 txt-center respon1">Novedades</h3>
                    </div>
                    <section className="bg0 p-t23 p-t-140">
                        <div className="container ">
                            <div className="row isotope-grid">
                                {homeProducts.map((product) => {
                                    return <ProductCard product={product} key={product.id} />;
                                })}
                            </div>
                        </div>
                    </section>
                </div>

               {/*  {!loading && (
                    <div className="flex-c-m w-full justify-center">
                        <button
                            className="flex-c-m stext-101 cl5 size-103 bg2 bor1 hov-btn1 p-lr-15 trans-04"
                            onClick={() => setPage(page + 1)}
                            style={{ width: "150px" }}
                        >
                            Cargar Más
                        </button>
                    </div>
                )} */}
            </div>

        </>
    );
}

export default Home;

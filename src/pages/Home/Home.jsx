import React, { useEffect, useState } from 'react';
import Hero from '../../components/Hero/Hero';
import { API_BASE_URL } from '../../utils/constants';
import ProductCard from '../../components/ProductCard/ProductCard';

const Home = () => {
    const [homeProducts, setHomeProducts] = useState([]);
    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch(
                `${API_BASE_URL}/products?_sort=-created_at&_limit=8`
            );

            const products = await response.json();
            setHomeProducts(products);
        };
        fetchProducts();
    }, []);

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
            </div>

        </>
    );
}

export default Home;

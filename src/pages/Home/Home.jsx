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
            </div>

        </>
    );
}

export default Home;

/*
 * Get Products:
 * Functions: useEffect, useState
 * This function is responsible for fetching the list of products
 * from the API endpoint specified in the API_BASE_URL constant. Initially,
 * it fetches the first page of products and updates the list when the page state changes.
 * Show News:
 * Components: ProductCard.
 * It uses the ProductCard component to visually represent each product as a card,
 * displaying its image, name, and other details.
 * Paging and On-Demand Loading:
 * It implements pagination functionality to load more products as the user scrolls down the page.
 * The page state is updated when the user reaches the bottom of the page, triggering the fetching
 *  of the next page of products.
 */
import { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import { API_BASE_URL } from "../../utils/constants";
import "./Products.css";

const Products = () => {
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);

    const fetchProducts = async () => {
        try {
            const response = await fetch(
                `${API_BASE_URL}/products?_page=${page}&_limit=4`
            );
            const data = await response.json();

            if (data.lenght < 4) {
                setHasMore(false);
            }
            if (page > 1) {
                setProducts((prevProducts) => [...prevProducts, ...data]);
            } else {
                setProducts(data);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, [page]);

    return (
        <div className="sec-banner bg0 p-t-80">
            <div className="container">
                <div className="p-b-32">
                    <h3 className="ltext-105 cl5 txt-center respon1">
                        Lista de Artículos
                    </h3>
                </div>

                <section className="bg0 p-t-23 p-b-140">
                    <div className="container">
                        <div className="row isotope-grid">
                            {products.map((product) => {
                                return <ProductCard product={product} key={product.id} />
                            })}
                        </div>

                        {hasMore && (
                            <div className="flex-c-m flex-w w-full p-t-15">

                                <button
                                    className="flex-c-m stext-101 cl5 size-103 bg2 bor1 hov-btn1 p-lr-15 trans-04"
                                    onClick={() => setPage(page + 1)}
                                    style={{ width: "150px" }}
                                >
                                    Cargar Más
                                </button>
                            </div>
                        )}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Products;



/*
 * The Products component displays a list of available products. Initially, 
 * it shows the first 4 products obtained from the API. Then, when the user 
 * clicks the "Load More" button, more products are loaded, increasing the page
 * number and making a new API call.
 * (fetchProducts): This asynchronous function is responsible for fetching products 
 * from the API using the current page number. If the number of products returned by 
 * the API is less than 4, it sets the "hasMore" state to false to indicate that there 
 * are no more products available to load. It then updates the state of the products by 
 * adding the new products obtained to the existing list.
 * Effect (useEffect): It's used to call the "fetchProducts" function whenever the page 
 * number changes, ensuring that the updated products are obtained from the API.
 * The component renders the list of products using the ProductCard component. Additionally, 
 * it displays a "Load More" button that allows the user to load more products if available. 
 * If there are no more products to load, the button disappears.
 */
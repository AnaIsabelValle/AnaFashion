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

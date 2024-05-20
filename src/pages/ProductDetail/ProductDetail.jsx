import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { API_BASE_URL } from "../../utils/constants";
import { CartContext } from "../../context/CartContext";
import Swal from "sweetalert2"; 


const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/products/${id}`);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const product = await response.json();

        setProduct(product);
        setError(null);

        console.log(product);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    getProduct();
  }, [id]);

  const handleAddToCart = () => {
    addToCart(product, id, quantity);
    Swal.fire({
      icon: "success",
      title: `${product.name} se añadió al carrito !`,
      showConfirmButton: false,
      timer: 1000,
    });
  };

  if (error) {
    return (
      <div className="p-b-30 p-t-50">
        <h1>Error: {error}</h1>
      </div>
    );
  }

  if (loading) {
    return (
      <section className="h-screen flex justify-center items-center">
        Cargando...
      </section>
    );
  }

  return (
    <>
      {/* Product Detail */}
      <section className="sec-product-detail bg0 p-t-65 p-b-60">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-7 p-b-30">
              <div className="p-l-25 p-r-30 p-lr-0-lg">
                <div className="flex-sb flex-w">
                  <div className="wrap-pic-w">
                    <img src={product.image} alt="IMG-PRODUCT" />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-5 p-b-30">
              <div className="p-r-50 p-t-5 p-lr-0-lg">
                <h4 className="mtext-105 cl2 js-name-detail p-b-14">
                  {product.name}
                </h4>

                <span className="mtext-106 cl2">{product.price} €</span>

                <p className="stext-102 cl3 p-t-23">{product.description}</p>

                <div className="flex-w flex-r-m p-b-10">
                  <div className="size-204 flex-w flex-m respon6-next">
                    <label className="cantidad">Cantidad</label>
                    <div className="flex-w m-r-20 m-tb-10">
                      {/*                       <div className="btn-num-product-down cl8 hov-btn3 trans-04 flex-c-m">
                        <i className="fs-16 zmdi zmdi-minus"></i>
                      </div>
 */}
                      <input
                        className="mtext-104 cl3 txt-center"
                        type="number"
                        id="quantity"
                        name="quantity"
                        value={quantity}
                        onChange={(e) => setQuantity(parseInt(e.target.value))}
                      />

                      {/*                       <div className="btn-num-product-up cl8 hov-btn3 trans-04 flex-c-m">
                        <i className="fs-16 zmdi zmdi-plus"></i>
                      </div>
 */}
                    </div>

                    <button className="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04 js-addcart-detail" onClick={handleAddToCart}>
                      Añadir a la cesta
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetail;

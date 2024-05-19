import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { API_BASE_URL } from "../../utils/constants";

import OrderDetailItem from "./OrderDetailItem";
import useAuth from "../../hooks/useAuth";

// eslint-disable-next-line react/prop-types
const OrderDetail = () => {
  const { id } = useParams();
  const [order, setOrder] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { isAuthenticated } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        setIsLoading(true);

        const response = await fetch(`${API_BASE_URL}/orders/${id}`);

        const data = await response.json();

        setOrder(data);
        setError(null);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchOrder();
  }, [id]);

  if (error) {
    return (
      <div className="p-b-30 p-t-50">
        <h1>Error: {error}</h1>
      </div>
    );
  }

  if (isLoading) {
    return (
      <section className="h-screen flex justify-center items-center">
        Cargando...
      </section>
    );
  }

  return (
    <>
      <section className="product-detail">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 col-xl-7 m-lr-auto m-b-50">
              <div className="m-l-25 m-r--38 m-lr-0-xl">
                <div className="wrap-table-shopping-cart">
                  <table className="table-shopping-cart">
                    <thead>
                      <tr className="table_head">
                        <th className="column-1">Productos</th>
                        <th className="column-2"></th>
                        <th className="column-3">Precio</th>
                        <th className="column-4">Cantidad</th>
                        <th className="column-5">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {order.orderItems.map((orderItem) => (
                        <OrderDetailItem
                          key={orderItem.product}
                          orderItem={orderItem}
                        />
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="col-sm-10 col-lg-7 col-xl-5 m-lr-auto m-b-50">
              <div className="bor10 p-lr-40 p-t-30 p-b-40 m-l-63 m-r-40 m-lr-0-xl p-lr-15-sm">
                <h4 className="mtext-109 cl2 p-b-30">Pedido Total</h4>

                <div className="flex-w flex-t p-t-27 p-b-33">
                  <div className="size-208">
                    <span className="mtext-101 cl2">Total:</span>
                  </div>

                  <div className="size-209 p-t-1">
                    <span className="mtext-110 cl2">
                      {order.totalPrice.toFixed(2)} €
                    </span>
                  </div>
                </div>

                <button
                  className="flex-c-m stext-101 cl0 size-116 bg3 bor14 hov-btn3 p-lr-15 trans-04 pointer"
                  onClick={() => navigate(-1)}
                >
                  Regresar
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OrderDetail;

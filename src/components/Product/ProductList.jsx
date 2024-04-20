import React from "react";

function ProductList() {
  return (
    <section className="bg0 p-t-23 p-b-140">
      <div className="container">
        <div className="p-b-10">
          <h3 className="ltext-103 cl5">Productos</h3>
        </div>
        <div className="flex-w flex-sb-m p-b-52">
          <div className="flex-w flex-l-m filter-tope-group m-tb-10">
            <button className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5 how-active1">Todos los Productos</button>
            <button className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5">Mujer</button>
            <button className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5">Hombre</button>
            <button className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5">Zapatos</button>
            <button className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5">Accesorios</button>
          </div>

          <div className="flex-w flex-c-m m-tb-10">
            <div className="flex-c-m stext-106 cl6 size-104 bg3 bor4 hov-btn3 p-lr-15 trans-04 pointer">Filtrar</div>
          </div>
        </div>
        <div className="row isotope-grid">
          <div className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item women">
            <div className="block2">
              <div className="block2-pic hov-img0">
                <img src="/images/product-01.jpg" alt="IMG-PRODUCT" />
                <a href="#" className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04">Quick View</a>
              </div>
              <div className="block2-txt flex-w flex-t p-t-14">
                <div className="block2-txt-child1 flex-col-l">
                  <a href="product-detail.html" className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">Round-Neck Tee</a>
                  <span className="stext-105 cl3">$34.75</span>
                </div>
                <div className="block2-txt-child2 flex-r p-t-3">
                  <a href="#" className="btn-addwish-b2 dis-block pos-relative js-addwish-b2">
                    <img className="icon-heart1 dis-block trans-04" src="/images/icons/icon-heart-01.png" alt="ICON" />
                    <img className="icon-heart2 dis-block trans-04 ab-t-l" src="/images/icons/icon-heart-02.png" alt="ICON" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Agrega las imágenes restantes aquí */}
        </div>
        <div className="flex-c-m flex-w w-full p-t-45">
          <a href="#" className="flex-c-m stext-101 cl5 size-103 bg2 bor1 hov-btn1 p-lr-15 trans-04">Ver más</a>
        </div>
      </div>
    </section>
  );
}

export default ProductList;

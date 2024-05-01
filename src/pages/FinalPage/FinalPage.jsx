import React from 'react';

function FinalPage() {
    return (
        <div>
            {/* Title page */}
            <section className="bg-img1 txt-center p-lr-15 p-tb-92" style={{ backgroundImage: "url('/images/bg-01.jpg')" }}>
                <h2 className="ltext-105 cl0 txt-center">
                    Realizada la Compra con Éxito
                </h2>
            </section>

            {/* Content page */}
            <section className="bg0 p-t-75 p-b-120">
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-12 col-md-6 col-lg-4 text-center">
                            <img src="images/icons/AnaFashion-logo-01.png" alt="IMG-LOGO" style={{ border: "2px solid #ccc", borderRadius: "10px" }} />
                        </div>
                    </div>
                    <div className="row justify-content-center align-items-center mt-3">
                        <div className="col-md-8 text-center">
                            <h2 className="mtext-111 cl2 p-b-16" style={{ fontFamily: 'Poppins-Medium, sans-serif',fontSize: "50px", fontWeight: 'bold' }}>
                                Gracias por confiar en nosotros
                            </h2>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default FinalPage;

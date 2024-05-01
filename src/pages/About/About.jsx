import React from 'react';

function About() {
    return (
        <div>
            {/* Title page */}
            <section className="bg-img1 txt-center p-lr-15 p-tb-92" style={{ backgroundImage: "url('/images/bg-01.jpg')" }}>
                <h2 className="ltext-105 cl0 txt-center">
                    Acerca de
                </h2>
            </section>

            {/* Content page */}
            <section className="bg0 p-t-75 p-b-120">
                <div className="container">
                    <div className="row p-b-148">
                        <div className="col-md-7 col-lg-8">
                            <div className="p-t-7 p-r-85 p-r-15-lg p-r-0-md">
                                <h3 className="mtext-111 cl2 p-b-16">
                                    Nuestra historia
                                </h3>

                                <p className="stext-113 cl6 p-b-26">
                                    AnaFashion se abre al mundo creando una web de tipo ecommerce para dar visibilidad de nuestra amplia gama de productos: ropa, calzados y accesorios exclusivos.
                                </p>

                                <p className="stext-113 cl6 p-b-26">
                                    Así podrás realizar tus compras de forma fácil, ágil y segura.
                                </p>

                                <p className="stext-113 cl6 p-b-26">
                                    Y como no !! También puedes dirigirte a nuestra tienda física cita en:
                                    <p>Av. De Los González, nº8, Valle de Guerra - La Laguna, (38320) Santa Cruz de Tenerife, Islas Canarias, España</p>
                                    <p>Teléfono (+1) 2345678, Email: anaFashin@ventas.com</p>
                                </p>

                                <p className="stext-113 cl6 p-b-26">
                                    Estamos para ayudarte, no lo dudes !! 
                                    <p>Si necesitas asesoramiento, aquí estamos !!</p>
                                </p>
                            </div>
                        </div>

                        <div className="col-11 col-md-5 col-lg-4 m-lr-auto">
                            <div className="how-bor1 ">
                                <div className="hov-img0">
                                    <img src="/images/about-01.jpg" alt="IMG" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <div className="row">
                        <div className="order-md-2 col-md-7 col-lg-8 p-b-30">
                            <div className="p-t-7 p-l-85 p-l-15-lg p-l-0-md">
                                <h3 className="mtext-111 cl2 p-b-16">
                                    Our Mission
                                </h3>

                                <p className="stext-113 cl6 p-b-26">
                                    Mauris non lacinia magna. Sed nec lobortis dolor. Vestibulum rhoncus dignissim risus, sed consectetur erat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam maximus mauris sit amet odio convallis, in pharetra magna gravida. Praesent sed nunc fermentum mi molestie tempor. Morbi vitae viverra odio. Pellentesque ac velit egestas, luctus arcu non, laoreet mauris. Sed in ipsum tempor, consequat odio in, porttitor ante. Ut mauris ligula, volutpat in sodales in, porta non odio. Pellentesque tempor urna vitae mi vestibulum, nec venenatis nulla lobortis. Proin at gravida ante. Mauris auctor purus at lacus maximus euismod. Pellentesque vulputate massa ut nisl hendrerit, eget elementum libero iaculis.
                                </p>

                                <div className="bor16 p-l-29 p-b-9 m-t-22">
                                    <p className="stext-114 cl6 p-r-40 p-b-11">
                                        Creativity is just connecting things. When you ask creative people how they did something, they feel a little guilty because they didn't really do it, they just saw something. It seemed obvious to them after a while.
                                    </p>

                                    <span className="stext-111 cl8">
                                        - Steve Job’s
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="order-md-1 col-11 col-md-5 col-lg-4 m-lr-auto p-b-30">
                            <div className="how-bor2">
                                <div className="hov-img0">
                                    <img src="/images/about-02.jpg" alt="IMG" />
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </section>
        </div>
    );
}

export default About;

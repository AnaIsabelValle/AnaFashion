import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [posWrapHeader, setPoswrapHeader] = useState(0);
  const [scrollToTop, setScrollTop] = useState(0);

  useEffect(() => {
    const topBar = document.querySelector('.top-bar');
    if (topBar) {
      setPoswrapHeader(topBar.offsetHeight);
    }
    const onScroll = () => {
      setScrollTop(window.pageXOffset || document.documentElement.scrollTop);
    };
    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const isFixedMenu = scrollToTop > posWrapHeader;
  const top = isFixedMenu ? 0 : posWrapHeader - scrollToTop;

  return (
    <header>
      {/* Header desktop */}
      <div className={`container-menu-desktop ${isFixedMenu ? 'fix-menu-desktop' : ''}`} style={{ height: '124px' }}>
        {/* Botones de Login y Register */}
        {/* <div className="wrap-icon-header flex-w flex-r-m">
          {/* Botón de Login 
          <div className="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11">
            <Link to="/login" className="header-btn" style={{ color: '#8D8263', backgroundColor: '#FFD700' }}>
              Login
            </Link>
          </div>
          {/* Botón de Register 
          <div className="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11">
            <Link to="/register" className="header-btn" style={{ color: '#8D8263', backgroundColor: '#FFD700' }}>
              Register
            </Link>
          </div>
        </div> */}

        {/* Topbar */}
        <div className="top-bar">
          <div className="content-topbar flex-sb-m h-full container">
            <div className="left-top-bar">Envío gratuito para compras superiores a 50€</div>

            <div className="right-top-bar flex-w h-full">
              <a href="#" className="flex-c-m trans-04 p-lr-25">
                Ayuda y Preguntas Frecuentes
              </a>
              <Link
                to="/login"
                className="flex-c-m trans-04 p-lr-25"
              >
                Acceso
              </Link>
              <Link
                to="/register"
                className="flex-c-m trans-04 p-lr-25"
              >
                Registro
              </Link>

              <a href="#" className="flex-c-m trans-04 p-lr-25">
                Euros
              </a>
            </div>
          </div>
        </div>

        <div className="wrap-menu-desktop" style={{ top: `${top}px` }}>
          <nav className="limiter-menu-desktop container">
            {/* Logo desktop */}
            <a href="#" className="logo">
              <img src="images/icons/AnaFashion-logo-01.png" alt="IMG-LOGO" />
            </a>

            {/* Menu desktop */}
            <div className="menu-desktop">
              <ul className="main-menu">
                <li className="active-menu">
                <Link
                  to="/home"
                  className="flex-c-m trans-04 p-lr-25"
                >
                  Home
                </Link>
                  {/* <a href="index.html">Home</a> */}
                  <ul className="sub-menu">
                    {/* <li>
                      <a href="index.html">Home</a>
                    </li> */}
                    {/* <li>
                      <a href="home-02.html">Homepage 2</a>
                    </li>
                    <li>
                      <a href="home-03.html">Homepage 3</a>
                    </li> */}
                  </ul>
                </li>

                {/* <li>
                  <a href="product.html">Shop</a>
                </li> */}
                <Link
                  to="/products"
                  className="flex-c-m trans-04 p-lr-25"
                >
                  Artículos
                </Link>

                <li className="label1" data-label1="hot">
                  <Link
                    to="/cart"
                    className="flex-c-m trans-04 p-lr-25"
                  >
                    Cesta
                  </Link>

                </li>

                <li>
                  <a href="blog.html">Blog</a>
                </li>

                <li>
                  <a href="about.html">About</a>
                </li>

                <li>
                  <Link
                    to="/contact"
                    className="flex-c-m trans-04 p-lr-25"
                  >
                    Contacto
                  </Link>

                </li>
              </ul>
            </div>

            {/* Icon header */}
            <div className="wrap-icon-header flex-w flex-r-m">
              <div className="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 js-show-modal-search">
                <i className="zmdi zmdi-search"></i>
              </div>

              <div
                className="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti js-show-cart"
                data-notify="2"
              >
                <i className="zmdi zmdi-shopping-cart"></i>
              </div>

              <a href="#" className="dis-block icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti" data-notify="0">
                <i className="zmdi zmdi-favorite-outline"></i>
              </a>
            </div>
          </nav>
        </div>
      </div>

      {/* Header Mobile */}
      <div className="wrap-header-mobile">
        {/* Logo moblie */}
        <div className="logo-mobile">
          <a href="index.html">
            <img src="images/icons/logo-01.png" alt="IMG-LOGO" />
          </a>
        </div>

        {/* Icon header */}
        <div className="wrap-icon-header flex-w flex-r-m m-r-15">
          <div className="icon-header-item cl2 hov-cl1 trans-04 p-r-11 js-show-modal-search">
            <i className="zmdi zmdi-search"></i>
          </div>

          <div
            className="icon-header-item cl2 hov-cl1 trans-04 p-r-11 p-l-10 icon-header-noti js-show-cart"
            data-notify="2"
          >
            <i className="zmdi zmdi-shopping-cart"></i>
          </div>

          <a href="#" className="dis-block icon-header-item cl2 hov-cl1 trans-04 p-r-11 p-l-10 icon-header-noti" data-notify="0">
            <i className="zmdi zmdi-favorite-outline"></i>
          </a>
        </div>

        {/* Button show menu */}
        <div className="btn-show-menu-mobile hamburger hamburger--squeeze">
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </div>
      </div>

      {/* Menu Mobile */}
      <div className="menu-mobile">
       {/*  <ul className="topbar-mobile">
          <li>
            <div className="left-top-bar">Free shipping for standard order over $100</div>
          </li>

          <li>
            <div className="right-top-bar flex-w h-full">
              <a href="#" className="flex-c-m p-lr-10 trans-04">
                Help & FAQs
              </a>

              <a href="#" className="flex-c-m p-lr-10 trans-04">
                My Account
              </a>

              <a href="#" className="flex-c-m p-lr-10 trans-04">
                EN
              </a>

              <a href="#" className="flex-c-m p-lr-10 trans-04">
                USD
              </a>
            </div>
          </li>
        </ul>

        <ul className="main-menu-m">
          <li>
            <a href="index.html">Home</a>
            <ul className="sub-menu-m">
              <li>
                <a href="index.html">Homepage 1</a>
              </li>
              <li>
                <a href="home-02.html">Homepage 2</a>
              </li>
              <li>
                <a href="home-03.html">Homepage 3</a>
              </li>
            </ul>
            <span className="arrow-main-menu-m">
              <i className="fa fa-angle-right" aria-hidden="true"></i>
            </span>
          </li>

          <li>
            <a href="product.html">Shop</a>
          </li>

          <li>
            <a href="shoping-cart.html" className="label1 rs1" data-label1="hot">
              Features
            </a>
          </li>

          <li>
            <a href="blog.html">Blog</a>
          </li>

          <li>
            <a href="about.html">About</a>
          </li>

          <li>
            <a href="contact.html">Contact</a>
          </li>
        </ul> */}
      </div>

      {/* Modal Search */}
      <div className="modal-search-header flex-c-m trans-04 js-hide-modal-search">
        <div className="container-search-header">
          <button className="flex-c-m btn-hide-modal-search trans-04 js-hide-modal-search">
            <img src="images/icons/icon-close2.png" alt="CLOSE" />
          </button>

          <form className="wrap-search-header flex-w p-l-15">
            <button className="flex-c-m trans-04">
              <i className="zmdi zmdi-search"></i>
            </button>
            <input className="plh3" type="text" name="search" placeholder="Search..." />
          </form>
        </div>
      </div>
    </header>
  );
};

export default Header;

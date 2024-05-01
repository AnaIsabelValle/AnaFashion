/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";

import AfroStyles from "./afroStyles";

const NextArrow = (props) => {
  const { onClick } = props;

  return (
    <button className="arrow-slick1 next-slick1" onClick={onClick}>
      <i className="zmdi zmdi-caret-right"></i>
    </button>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;

  return (
    <button className="arrow-slick1 prev-slick1" onClick={onClick}>
      <i className="zmdi zmdi-caret-left"></i>
    </button>
  );
};

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [visible, setVisible] = useState(false);
  const layerRefs = useRef([]);
  const timers = useRef([]);

  const settings = {
    pauseOnFocus: false,
    pauseOnHover: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    speed: 1000,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 6000,
    arrows: true,
    dots: false,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    beforeChange: () => {
      setVisible(false);
      layerRefs.current.forEach((ref) => {
        if (ref) {
          ref.style.visibility = "hidden";
          ref.classList.remove(ref.dataset.appear);
        }
      });
    },
    afterChange: (index) => {
  
      setCurrentSlide(index);
      setVisible(true);
    },
  };

  useEffect(() => {
    timers.current.forEach(clearTimeout);
    timers.current = [];

    layerRefs.current.forEach((ref) => {
      if (ref) {
        const delay = ref.dataset.delay;
        const timer = setTimeout(() => {
          ref.style.visibility = "visible";
          ref.classList.add(ref.dataset.appear);
        }, delay);
        timers.current.push(timer);
      }
    });

    return () => timers.current.forEach(clearTimeout);
  }, [currentSlide]);

  return (
    <section className="section-slide">
      <div className="slick1">
        <Slider {...settings}>
          {AfroStyles.map((item) => (
            <div key={item.id}>
              <div
                className="item-slick1"
                style={{
                  backgroundImage: `url(${item.src})`,
                }}
              >
                <div className="container h-full">
                  <div className="flex-col-l-m h-full p-t-100 p-b-30 respon5">
                    <div
                      ref={(el) => {
                        if (el && !layerRefs.current.includes(el)) {
                          layerRefs.current.push(el);
                        }
                      }}
                      className={`layer-slick1 animated ${
                        visible ? "visible-true" : "visible-false"
                      }`}
                      data-appear={item.animate_description}
                      data-delay="0"
                    >
                      <span className="ltext-101 cl2 respon2">
                        {item.description}
                      </span>
                    </div>
                    <div
                      ref={(el) => {
                        if (el && !layerRefs.current.includes(el)) {
                          layerRefs.current.push(el);
                        }
                      }}
                      className={`layer-slick1 animated ${
                        visible ? "visible-true" : "visible-false"
                      }`}
                      data-appear={item.animate_title}
                      data-delay="800"
                    >
                      <h2 className="ltext-201 cl2 p-t-19 p-b-43 respon1">
                        {item.title}
                      </h2>
                    </div>

                    <div
                      ref={(el) => {
                        if (el && !layerRefs.current.includes(el)) {
                          layerRefs.current.push(el);
                        }
                      }}
                      className={`layer-slick1 animated ${
                        visible ? "visible-true" : "visible-false"
                      }`}
                      data-appear={item.animate_title}
                      data-delay="1600"
                    >
                      <a
                        href="product.html"
                        className="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15"
                      >
                        {item.button}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Hero;

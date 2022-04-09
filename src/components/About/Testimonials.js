import React, { useEffect, useRef, useState } from "react";
import prevBtn from "../../Assets/prev-btn.png";
import nextBtn from "../../Assets/next-btn.png";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
  const [sliderAction, setAliderAction] = useState([]);
  const sliderref = useRef();

  useEffect(() => {
    sliderAction.push(sliderref.current);
    setAliderAction(sliderAction[0]);
  }, []);

  const settings_3 = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1250,
        settings: {
          arrows: false,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 678,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="testimonial bg-color-7">
      <div className="wrapper">
        <h1>What Clients say About us</h1>
        <div className="text-right">
          <button onClick={sliderAction.slickPrev} className="bg-none btn-prev">
            <img src={prevBtn} />
          </button>
          <button onClick={sliderAction.slickNext} className="bg-none btn-next">
            <img src={nextBtn} />
          </button>
        </div>
      </div>
      <div className="test-cards">
        <Slider ref={sliderref} {...settings_3}>
          <div className="test-card">
            <div>
              <p>
                "I couldn't have asked for more than this. I didn't even need
                training. I have gotten at least 50 times the value from PoshN."
              </p>
              <div className="author flex flex-ai-c">
                <img
                  className="img"
                  src="https://picsum.photos/id/1023/367/267"
                />
                <div className="info">
                  <h5>Rohit Ransore</h5>
                  <h6>UX designer at ATG</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="test-card">
            <div>
              <p>
                "I couldn't have asked for more than this. I didn't even need
                training. I have gotten at least 50 times the value from PoshN."
              </p>
              <div className="author flex flex-ai-c">
                <img
                  className="img"
                  src="https://picsum.photos/id/1023/367/267"
                />
                <div className="info">
                  <h5>Rohit Ransore</h5>
                  <h6>UX designer at ATG</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="test-card">
            <div>
              <p>
                "I couldn't have asked for more than this. I didn't even need
                training. I have gotten at least 50 times the value from PoshN."
              </p>
              <div className="author flex flex-ai-c">
                <img
                  className="img"
                  src="https://picsum.photos/id/1023/367/267"
                />
                <div className="info">
                  <h5>Rohit Ransore</h5>
                  <h6>UX designer at ATG</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="test-card">
            <div>
              <p>
                "I couldn't have asked for more than this. I didn't even need
                training. I have gotten at least 50 times the value from PoshN."
              </p>
              <div className="author flex flex-ai-c">
                <img
                  className="img"
                  src="https://picsum.photos/id/1023/367/267"
                />
                <div className="info">
                  <h5>Rohit Ransore</h5>
                  <h6>UX designer at ATG</h6>
                </div>
              </div>
            </div>
          </div>

          <div className="test-card">
            <div>
              <p>
                "I couldn't have asked for more than this. I didn't even need
                training. I have gotten at least 50 times the value from PoshN."
              </p>
              <div className="author flex flex-ai-c">
                <img
                  className="img"
                  src="https://picsum.photos/id/1023/367/267"
                />
                <div className="info">
                  <h5>Rohit Ransore</h5>
                  <h6>UX designer at ATG</h6>
                </div>
              </div>
            </div>
          </div>

          <div className="test-card">
            <div>
              <p>
                "I couldn't have asked for more than this. I didn't even need
                training. I have gotten at least 50 times the value from PoshN."
              </p>
              <div className="author flex flex-ai-c">
                <img
                  className="img"
                  src="https://picsum.photos/id/1023/367/267"
                />
                <div className="info">
                  <h5>Rohit Ransore</h5>
                  <h6>UX designer at ATG</h6>
                </div>
              </div>
            </div>
          </div>

          <div className="test-card">
            <div>
              <p>
                "I couldn't have asked for more than this. I didn't even need
                training. I have gotten at least 50 times the value from PoshN."
              </p>
              <div className="author flex flex-ai-c">
                <img
                  className="img"
                  src="https://picsum.photos/id/1023/367/267"
                />
                <div className="info">
                  <h5>Rohit Ransore</h5>
                  <h6>UX designer at ATG</h6>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;

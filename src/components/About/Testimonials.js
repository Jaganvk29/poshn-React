import React from "react";
import prevBtn from "../../Assets/prev-btn.png";
import nextBtn from "../../Assets/next-btn.png";
import Slider from "react-slick";

import OwlCarousel from "react-owl-carousel2";
import "react-owl-carousel2/lib/styles.css";
import "react-owl-carousel2/src/owl.theme.default.css";

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section class="testimonial bg-color-7">
      <div class="wrapper">
        <h1>What Clients say About us</h1>
        <div class="text-right">
          <button class="bg-none btn-prev">
            <img src={prevBtn} />
          </button>
          <button class="bg-none btn-next">
            <img src={nextBtn} />
          </button>
        </div>
      </div>
      <div class="test-cards">
        <div class="test-card">
          <div>
            <p>
              "I couldn't have asked for more than this. I didn't even need
              training. I have gotten at least 50 times the value from PoshN."
            </p>
            <div class="author flex flex-ai-c">
              <img class="img" src="https://picsum.photos/id/1023/367/267" />
              <div class="info">
                <h5>Rohit Ransore</h5>
                <h6>UX designer at ATG</h6>
              </div>
            </div>
          </div>
        </div>
        <div class="test-card">
          <div>
            <p>
              "I couldn't have asked for more than this. I didn't even need
              training. I have gotten at least 50 times the value from PoshN."
            </p>
            <div class="author flex flex-ai-c">
              <img class="img" src="https://picsum.photos/id/1023/367/267" />
              <div class="info">
                <h5>Rohit Ransore</h5>
                <h6>UX designer at ATG</h6>
              </div>
            </div>
          </div>
        </div>
        <div class="test-card">
          <div>
            <p>
              "I couldn't have asked for more than this. I didn't even need
              training. I have gotten at least 50 times the value from PoshN."
            </p>
            <div class="author flex flex-ai-c">
              <img class="img" src="https://picsum.photos/id/1023/367/267" />
              <div class="info">
                <h5>Rohit Ransore</h5>
                <h6>UX designer at ATG</h6>
              </div>
            </div>
          </div>
        </div>
        <div class="test-card">
          <div>
            <p>
              "I couldn't have asked for more than this. I didn't even need
              training. I have gotten at least 50 times the value from PoshN."
            </p>
            <div class="author flex flex-ai-c">
              <img class="img" src="https://picsum.photos/id/1023/367/267" />
              <div class="info">
                <h5>Rohit Ransore</h5>
                <h6>UX designer at ATG</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

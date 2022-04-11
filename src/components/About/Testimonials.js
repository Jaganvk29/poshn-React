import React, { useEffect, useRef, useState } from "react";
import prevBtn from "../../Assets/prev-btn.png";
import nextBtn from "../../Assets/next-btn.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TestimonalCard from "./TestimonalCard";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Testimonials = () => {
  const [sliderAction, setAliderAction] = useState([]);
  const sliderref = useRef();

  const { ref, inView } = useInView({
    threshold: 0.3,
  });
  const textani = useAnimation();

  useEffect(() => {
    // TO CHECK IF ITS VIEW PORT TO START ANIMATION
    if (inView) {
      textani.start({
        ease: "easeInOut",
        y: 0,
        opacity: 1,

        transition: {
          duration: 0.5,
          bounce: 0.3,
        },
      });
    }
    // TO CHECK IF ITS NOT VIEW PORT TO REMOVE ANIMATION
    if (!inView) {
      textani.start({
        y: 100,
        opacity: 0,
      });
    }
  }, [inView]);

  useEffect(() => {
    sliderAction.push(sliderref.current);
    setAliderAction(sliderAction[0]);
  }, []);

  const settings_3 = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
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
    <section ref={ref} className="testimonial bg-color-7">
      <div className="wrapper">
        <motion.h1 animate={textani}>What Clients say About us</motion.h1>
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
          {/* MAP THE CARDS ONCE WE GET DATABASE INTEGRATION DONE */}
          <TestimonalCard
            userComment=" I couldn't have asked for more than this. I didn't even need training. I have gotten at least 50 times the value from PoshN."
            userPic="https://picsum.photos/id/1023/367/267"
            userName="Rohit Ransore"
            userJob="UX designer at ATG"
          />

          <TestimonalCard
            userComment=" I couldn't have asked for more than this. I didn't even need training. I have gotten at least 50 times the value from PoshN."
            userPic="https://picsum.photos/id/1023/367/267"
            userName="Rohit Ransore"
            userJob="UX designer at ATG"
          />

          <TestimonalCard
            userComment=" I couldn't have asked for more than this. I didn't even need training. I have gotten at least 50 times the value from PoshN."
            userPic="https://picsum.photos/id/1023/367/267"
            userName="Rohit Ransore"
            userJob="UX designer at ATG"
          />

          <TestimonalCard
            userComment=" I couldn't have asked for more than this. I didn't even need training. I have gotten at least 50 times the value from PoshN."
            userPic="https://picsum.photos/id/1023/367/267"
            userName="Rohit Ransore"
            userJob="UX designer at ATG"
          />
          <TestimonalCard
            userComment=" I couldn't have asked for more than this. I didn't even need training. I have gotten at least 50 times the value from PoshN."
            userPic="https://picsum.photos/id/1023/367/267"
            userName="Rohit Ransore"
            userJob="UX designer at ATG"
          />
          <TestimonalCard
            userComment=" I couldn't have asked for more than this. I didn't even need training. I have gotten at least 50 times the value from PoshN."
            userPic="https://picsum.photos/id/1023/367/267"
            userName="Rohit Ransore"
            userJob="UX designer at ATG"
          />
          <TestimonalCard
            userComment=" I couldn't have asked for more than this. I didn't even need training. I have gotten at least 50 times the value from PoshN."
            userPic="https://picsum.photos/id/1023/367/267"
            userName="Rohit Ransore"
            userJob="UX designer at ATG"
          />
          <TestimonalCard
            userComment=" I couldn't have asked for more than this. I didn't even need training. I have gotten at least 50 times the value from PoshN."
            userPic="https://picsum.photos/id/1023/367/267"
            userName="Rohit Ransore"
            userJob="UX designer at ATG"
          />
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;

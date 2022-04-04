import React, { useEffect } from "react";
import burger from "../../Assets/burger.png";
import momos from "../../Assets/momos.png";
import veggies from "../../Assets/veggies.png";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const LatestBlogs = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });
  const textani = useAnimation();
  const paraani = useAnimation();

  useEffect(() => {
    if (inView) {
      paraani.start({
        y: 0,
        opacity: 1,
        transition: {
          ease: "easeInOut",
          duration: 0.5,
          bounce: 0.3,
        },
      });

      textani.start({
        opacity: 1,
        scale: 1,
        transition: {
          ease: "easeInOut",

          duration: 0.5,
          bounce: 0.3,
        },
      });
    }
    // TO CHECK IF ITS NOT VIEW PORT TO REMOVE ANIMATION
    if (!inView) {
      paraani.start({
        y: 100,
        opacity: 0,
      });

      textani.start({
        scale: 0.3,
        opacity: 0,
      });
    }
  }, [inView]);

  return (
    <section ref={ref} class="has-snap has-ani blogs-section">
      <div class="wrapper">
        <motion.h1 animate={textani}>The Latest Blogs</motion.h1>
        <motion.div animate={paraani} class="blogs-container">
          {/* <!-- card 1 --> */}
          <div class="blog-card">
            <img class="img" src={burger} />
            <div class="card-info">
              <h3>Junk food is not bad</h3>
              <p>
                Junk food is not bad, if you are smart enough. One burger
                consists around 400 to 500 calories...
              </p>
            </div>
          </div>
          {/* <!-- card 2 --> */}
          <div class="blog-card">
            <img class="img" src={momos} />
            <div class="card-info">
              <h3>Is keto diet for you? A Mayo ex...</h3>
              <p>
                If you’re on a diet of 1600 calories you can eat at least two
                burgers daily and still have 800-1....
              </p>
            </div>
          </div>
          {/* <!-- card 3 --> */}
          <div class="blog-card">
            <img class="img" src={veggies} />
            <div class="card-info">
              <h3>15 healthiest vegetables on...</h3>
              <p>
                Eat at least two burgers daily and still have 800-1000 calories
                left for protein and other...
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LatestBlogs;

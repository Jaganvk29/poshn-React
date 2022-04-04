import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Footer = () => {
  const { ref, inView } = useInView({
    threshold: 0.4,
  });
  const socailanimate = useAnimation();
  const quicklinks = useAnimation();

  useEffect(() => {
    if (inView) {
      socailanimate.start({
        x: 0,
        opacity: 1,
        transition: {
          ease: "easeInOut",
          duration: 0.3,
          bounce: 0.3,
        },
      });

      quicklinks.start({
        y: 0,
        opacity: 1,

        transition: {
          ease: "easeInOut",
          duration: 0.3,
          bounce: 0.3,
        },
      });
    }
    // TO CHECK IF ITS NOT VIEW PORT TO REMOVE ANIMATION
    if (!inView) {
      socailanimate.start({
        x: -100,
        opacity: 0,
      });

      quicklinks.start({
        y: 50,
        opacity: 0,
      });
    }
  }, [inView]);

  return (
    <footer class="has-snap has-ani footer flex flex-jc-c flex-ai-c">
      <div ref={ref} class="wrapper flex flex-wrap flex-jc-sb">
        <motion.div animate={socailanimate} class="socials">
          <div class="social-links flex flex-jc-sb">
            <a href="#" class="facebook"></a>
            <a href="#" class="twitter"></a>
            <a href="#" class="instagram"></a>
            <a href="#" class="pinterest"></a>
            <a href="#" class="linkedin"></a>
          </div>
          <h4>Poshn</h4>
          <h5>578 Broadway #607 New York, NY 10025</h5>
        </motion.div>
        <motion.div
          animate={quicklinks}
          class="links flex flex-wrap flex-jc-sb"
        >
          <div class="about links-item">
            <h3>About</h3>
            <div class="flex flex-col">
              <a href="#">Join the network</a>
              <a href="#">FAQ</a>
              <a href="#">Blog</a>
              <a href="#">About Poshn</a>
              <a href="#">Our team</a>
            </div>
          </div>
          <div class="useful-links links-item">
            <h3>Useful links</h3>
            <div class="flex flex-col">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of service</a>
              <a href="#">Contact Us</a>
            </div>
          </div>
          <div class="terms links-item">
            <h3>Terms of service</h3>
            <div class="flex flex-col">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

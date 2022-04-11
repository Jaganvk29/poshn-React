import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

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
    <footer className="has-snap has-ani footer flex flex-jc-c flex-ai-c">
      <div ref={ref} className="wrapper flex flex-wrap flex-jc-sb">
        <motion.div animate={socailanimate} className="socials">
          <div className="social-links flex flex-jc-sb">
            <a href="#" className="facebook"></a>
            <a href="#" className="twitter"></a>
            <a href="#" className="instagram"></a>
            <a href="#" className="pinterest"></a>
            <a href="#" className="linkedin"></a>
          </div>
          <h4>Poshn</h4>
          <h5>578 Broadway #607 New York, NY 10025</h5>
        </motion.div>
        <motion.div
          animate={quicklinks}
          className="links flex flex-wrap flex-jc-sb"
        >
          <div className="about links-item">
            <h3>About</h3>
            <div className="flex flex-col">
              <a href="#">Join the network</a>
              <Link to="/faq">FAQ</Link>
              <Link to="/blog">Blog</Link>
              <Link to="/about">About Poshn</Link>
              <a href="#">Our team</a>
            </div>
          </div>
          <div className="useful-links links-item">
            <h3>Useful links</h3>
            <div className="flex flex-col">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of service</a>
              <a href="#">Contact Us</a>
            </div>
          </div>
          <div className="terms links-item">
            <h3>Terms of service</h3>
            <div className="flex flex-col">
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

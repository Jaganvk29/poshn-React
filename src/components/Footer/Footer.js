import React from "react";

const Footer = () => {
  return (
    <footer class="has-snap has-ani footer flex flex-jc-c flex-ai-c">
      <div class="wrapper flex flex-wrap flex-jc-sb">
        <div class="socials">
          <div class="social-links flex flex-jc-sb">
            <a href="#" class="facebook"></a>
            <a href="#" class="twitter"></a>
            <a href="#" class="instagram"></a>
            <a href="#" class="pinterest"></a>
            <a href="#" class="linkedin"></a>
          </div>
          <h4>Poshn</h4>
          <h5>578 Broadway #607 New York, NY 10025</h5>
        </div>
        <div class="links flex flex-wrap flex-jc-sb">
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
        </div>
      </div>
    </footer>
  );
};

export default Footer;

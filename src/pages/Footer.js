import React from "react";

const Footer = () => {
  return (
    <footer className="footer-sec text-center">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="footer-social">
              <ul className="list-unstyled">
                <li>
                  <a className="wow fadeInUp" href="/#">
                    <i className="fab fa-facebook-f" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a className="wow fadeInDown" href="/#">
                    <i className="fab fa-twitter" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a className="wow fadeInUp" href="/#">
                    <i className="fab fa-google-plus-g" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a className="wow fadeInDown" href="/#">
                    <i className="fab fa-linkedin-in" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a className="wow fadeInUp" href="/#">
                    <i className="fab fa-instagram" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a className="wow fadeInDown" href="/#">
                    <i className="fab fa-youtube" aria-hidden="true" />
                  </a>
                </li>
              </ul>
            </div>
            <p className="company-about fadeIn">
              © 2022 myDev. Made With Love By
              <a href="/#"> myDev</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

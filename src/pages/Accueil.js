import React from "react";

const Accueil = () => {
  return (
    <div>
      <div className="banner-sec bg-accueil" id="banner">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6 d-flex align-items-center text-center text-lg-left">
              <div
                className="heading-area wow slideInLeft"
                data-wow-delay=".7s"
              >
                {/* <span className="sub-heading text-blue margin-top 30px">
                  Entreprise Éco-Responsable ♻️
                </span> */}
                <h4 className="heading">
                  Location de
                  <span className="d-block">Matériel BTP.</span>
                </h4>
                <p1>Entreprise </p1> <br />
                <p2>Éco-Responsable</p2> ♻️
                {/* <p className="text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit lacus
                  vel facilisis.{" "}
                </p> */}
                {/* <a href="#about" className="scroll button">
                  <i className="las la-angle-right" />
                  Learn More
                </a> */}
              </div>
            </div>
            {/* <div className="col-lg-6">
              <div
                className="image-banner wow slideInRight"
                data-wow-delay=".7s"
              >
                <img src="assets/images/chantier2.jpeg" alt />
              </div>
            </div> */}
          </div>
        </div>
        <div className="slider-icons">
          <ul className="slider-social banner-social">
            <li>
              <a className href="javascript:void(0);">
                <i className="fab fa-facebook-f" />{" "}
              </a>
            </li>
            <li>
              <a className href="javascript:void(0);">
                <i className="fab fa-twitter" />
              </a>
            </li>
            <li>
              <a className href="javascript:void(0);">
                <i className="fab fa-linkedin-in" />{" "}
              </a>
            </li>
            <li>
              <a className href="javascript:void(0);">
                <i className="fab fa-instagram" />{" "}
              </a>
            </li>
          </ul>
        </div>
      </div>
      ;
    </div>
  );
};

export default Accueil;

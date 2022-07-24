import React from "react";

const Map = () => {
  return (
    <section className="contact-sec" id="contact">
      <div className="container">
        <div className="row">
          <div
            className="col-md-12 col-lg-6 wow slideInLeft"
            data-wow-delay=".4s"
          >
            <div className="mapouter">
              <div className="gmap_canvas ">
                <iframe
                  className="map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2528.3560076090475!2d3.1676236156611877!3d50.67621647950719!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c32858cf4118d1%3A0xc1913a5ef9a9f3a1!2s35%20Av.%20Gustave%20Delory%2C%2059100%20Roubaix!5e0!3m2!1sfr!2sfr!4v1642697500599!5m2!1sfr!2sfr"
                  width={600}
                  height={410}
                  style={{ border: 0 }}
                  allowFullScreen
                />
              </div>
            </div>
          </div>
          <div
            className=" col-lg-6  contact-details text-center text-lg-left wow slideInRight"
            data-wow-delay=".4s"
          >
            <span className="contact-sub-heading">
              Lorem ipsum dolor sit amet consectetur
            </span>
            <h4 className="contact-heading">Denn Location</h4>
            <p className="contact-address">
              76 Rue Beaurepaire 59150 Wattrelos France
            </p>
            <ul className="contact-list">
              {/* <li>
                <span>Office Telephone:</span> 001 01085379709
              </li> */}
              <li>
                <span>Mobile:</span> 06 29 20 93 05
              </li>
              <li>
                <span>Email: </span> admin@website.com
              </li>
              <li>
                <span>Lun/Ven:</span> 7h30 à 19H <br />
                <span>Sam:</span> 7h30 à 15h
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Map;

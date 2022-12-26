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
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d69884.36826102815!2d-74.2584158790825!3d40.768767774313254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20%C3%89tat%20de%20New%20York%2C%20%C3%89tats-Unis!5e0!3m2!1sfr!2sfr!4v1672066037312!5m2!1sfr!2sfr" width={600}
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
            <h4 className="contact-heading">Location Bennes</h4>
            <p className="contact-address">
              79 Baxter St A, New York, NY 10013, États-Unis            </p>
            <ul className="contact-list">
              {/* <li>
                <span>Office Telephone:</span> 001 01085379709
              </li> */}
              <li>
                <span>Mobile:</span> 00 00 00 00 00
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

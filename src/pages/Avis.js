import React from "react";

const Avis = () => {
  return (
    <section className="reviews-sec bg-image" id="reviews">
      <div className="review-overlay" />
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12">
            <div className="review-sub">nos différents partenaires</div>
            <div className="review-heading">Nos clients satisfaits</div>
          </div>
          <div className="col-md-12 col-lg-12  order-1 order-md-2">
            <div className="testimonial-carousel">
              <div className="testimonial-box owl-carousel owl-theme">
                <div className="review-content">
                  <div className="review-des">
                    <p>
                      We have a number of different teams within our agency that
                      specialise in different areas of business so you can be
                      sure that you receive a generic service and although we
                      boast years and years of service we can ensure you that is
                      a good thing in this industry.
                    </p>
                  </div>
                  <div className="reiview-user">
                    <p>John Smith - New York City</p>
                    <span className="d-inline-block test-star">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                    </span>
                  </div>
                </div>
                <div className="review-content">
                  <div className="review-des">
                    <p>
                      We have a number of different teams within our agency that
                      specialise in different areas of business so you can be
                      sure that you receive a generic service and although we
                      boast years and years of service we can ensure you that is
                      a good thing in this industry.
                    </p>
                  </div>
                  <div className="reiview-user">
                    <p>John Smith - New York City</p>
                    <span className="d-inline-block test-star">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                    </span>
                  </div>
                </div>
                <div className="review-content">
                  <div className="review-des">
                    <p>
                      We have a number of different teams within our agency that
                      specialise in different areas of business so you can be
                      sure that you receive a generic service and although we
                      boast years and years of service we can ensure you that is
                      a good thing in this industry.
                    </p>
                  </div>
                  <div className="reiview-user">
                    <p>John Smith - New York City</p>
                    <span className="d-inline-block test-star">
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="project-links-left d-none d-md-block">
          <a className="customPrevBtn">
            <i className="las la-angle-left" />
          </a>
        </div>
        <div className="project-links-right d-none d-md-block">
          <a className="customNextBtn">
            <i className="las la-angle-right" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Avis;

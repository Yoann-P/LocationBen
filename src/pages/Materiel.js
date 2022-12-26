import React from "react";

const Materiel = () => {
  return (
    <section className="portfolio-sec company-portfolio-section" id="materiel">
      <div className="container">
        <div className="section-heading">
          <div className="row">
            <div
              className="col-lg-6 wow fadeInUp text-center text-lg-left"
              data-wow-delay="300ms"
            >
              <h1 className="heading">Nos Bennes</h1>
            </div>
            <div className="col-md-12 pt-4 pt-md-5">
              <div id="js-grid-mosaic" className="cbp cbp-l-grid-mosaic">
                <div className="cbp-item web logo">
                  <a
                    href="assets/images/benne1.jpeg"
                    className="cbp-caption cbp-lightbox"
                    data-title=""
                  >
                    <div className="cbp-caption-defaultWrap">
                      <img src="assets/images/benne1.jpeg" alt="bennes" />
                    </div>
                    <div className="cbp-caption-activeWrap portfolio-hover-effect d-flex align-items-end">
                      <div className="portfolio-inner-content">
                        <span />
                        <span />
                      </div>
                    </div>
                  </a>
                </div>
                <div className="cbp-item print mobile web">
                  <a
                    href="assets/images/truck2.jpeg"
                    className="cbp-caption cbp-lightbox"
                    data-title=""
                  >
                    <div className="cbp-caption-defaultWrap">
                      <img src="assets/images/truck2.jpeg" alt="bennes" />
                    </div>
                    <div className="cbp-caption-activeWrap portfolio-hover-effect d-flex align-items-end">
                      <div className="portfolio-inner-content">
                        <span />
                        <span />
                      </div>
                    </div>
                  </a>
                </div>
                <div className="cbp-item print logo development web mobile">
                  <a
                    href="assets/images/chantier3.jpeg"
                    className="cbp-caption cbp-lightbox"
                    data-title=""
                  >
                    <div className="cbp-caption-defaultWrap">
                      <img src="assets/images/chantier3.jpeg" alt="bennes" />
                    </div>
                    <div className="cbp-caption-activeWrap portfolio-hover-effect d-flex align-items-end">
                      <div className="portfolio-inner-content">
                        <span />
                        <span />
                      </div>
                    </div>
                  </a>
                </div>
                <div className="cbp-item logo development">
                  <a
                    href="assets/images/dechargement3.jpeg"
                    className="cbp-caption cbp-lightbox"
                    data-title=""
                  >
                    <div className="cbp-caption-defaultWrap">
                      <img
                        src="assets/images/dechargement3.jpeg"
                        alt="bennes"
                      />
                    </div>
                    <div className="cbp-caption-activeWrap portfolio-hover-effect d-flex align-items-end">
                      <div className="portfolio-inner-content">
                        <span />
                        <span />
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div
                id="js-loadMore-lightbox-gallery"
                className="cbp-l-loadMore-button text-data wow fadeInUp"
                data-wow-delay="650ms"
              >
                <div className="row portfolio-foot-detail text-data-inner">
                  <div className="col-7 col-lg-4 offset-lg-6 text-left pl-4">
                    <span className="p-text">Nous avons loué plus de</span>
                    <h4 className="p-num">14890 bennes</h4>
                    <span className="p-text">
                      et autant de clients
                      satisfaits
                    </span>
                  </div>
                  <div className="col-5 col-lg-2 d-flex justify-content-end align-items-center">
                    <a
                      href="#devis"
                      className="btn pink-and-yellow-btn rounded-pill"
                    >
                      Devis
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Materiel;

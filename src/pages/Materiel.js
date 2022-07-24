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
              <h1 className="heading">
                Notre<span className="d-block">Matériel</span>
              </h1>
            </div>
            <div className="col-md-12 pt-4 pt-md-5">
              <div
                id="js-filters-mosaic"
                className="cbp-l-filters-button wow fadeInUp text-center text-lg-left"
                data-wow-delay="350ms"
              >
                <div
                  data-filter="*"
                  className="cbp-filter-item-active cbp-filter-item"
                >
                  Nos Offres
                </div>
                <div data-filter=".web" className="cbp-filter-item">
                  Bennes
                </div>
                <div data-filter=".logo" className="cbp-filter-item">
                  Autres
                </div>
                <div data-filter=".mobile" className="cbp-filter-item">
                  Équipe
                </div>
              </div>
              <div className="cbp-wrapper">
                <div
                  className="cbp-item web logo"
                  style={{ width: 530, left: 0, top: 0 }}
                >
                  <div className="cbp-item-wrapper">
                    <a
                      href="../../assets/images/camion2.jpeg"
                      className="cbp-caption cbp-lightbox"
                      data-title="Workout Buddy<br>by Tiberiu Neamu"
                    >
                      <div className="cbp-caption-defaultWrap">
                        <img src="../../assets/images/camion2.jpeg" alt="img" />
                      </div>
                      <div className="cbp-caption-activeWrap portfolio-hover-effect d-flex align-items-end">
                        <div className="portfolio-inner-content">
                          <span />
                          <span />
                        </div>
                        <div className="hover-text">
                          {/* <h4 className="p-hover-title">Amazing House</h4> */}
                          <p className="p-hover-des">Camion rouge 🎺</p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div
                  className="cbp-item print mobile web even"
                  style={{ width: 530, left: 580, top: 0 }}
                >
                  <div className="cbp-item-wrapper">
                    <a
                      href="../../assets/images/camion.jpeg"
                      className="cbp-caption cbp-lightbox"
                      data-title="Workout Buddy<br>by Tiberiu Neamu"
                    >
                      <div className="cbp-caption-defaultWrap">
                        <img src="../../assets/images/camion.jpeg" alt="img" />
                      </div>
                      <div className="cbp-caption-activeWrap portfolio-hover-effect d-flex align-items-end">
                        <div className="portfolio-inner-content">
                          <span />
                          <span />
                        </div>
                        <div className="hover-text">
                          {/* <h4 className="p-hover-title">White House</h4> */}
                          <p className="p-hover-des">Camion jaune 🚛</p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div
                  className="cbp-item print logo development web mobile"
                  style={{ width: 530, left: 0, top: 485 }}
                >
                  <div className="cbp-item-wrapper">
                    <a
                      href="../../assets/images/chantier3.jpeg"
                      className="cbp-caption cbp-lightbox"
                      data-title="Workout Buddy<br>by Tiberiu Neamu"
                    >
                      <div className="cbp-caption-defaultWrap">
                        <img
                          src="../../assets/images/chantier3.jpeg"
                          alt="img"
                        />
                      </div>
                      <div className="cbp-caption-activeWrap portfolio-hover-effect d-flex align-items-end">
                        <div className="portfolio-inner-content">
                          <span />
                          <span />
                        </div>
                        <div className="hover-text">
                          {/* <h4 className="p-hover-title">Regency Villa</h4> */}
                          <p className="p-hover-des">Benne ♻️</p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div
                  className="cbp-item logo development even"
                  style={{ width: 530, left: 580, top: 485 }}
                >
                  <div className="cbp-item-wrapper">
                    <a
                      href="../../assets/images/chantier3.jpeg"
                      className="cbp-caption cbp-lightbox"
                      data-title="Workout Buddy<br>by Tiberiu Neamu"
                    >
                      <div className="cbp-caption-defaultWrap">
                        <img
                          src="../../assets/images/chantier3.jpeg"
                          alt="img"
                        />
                      </div>
                      <div className="cbp-caption-activeWrap portfolio-hover-effect d-flex align-items-end">
                        <div className="portfolio-inner-content">
                          <span />
                          <span />
                        </div>
                        <div className="hover-text">
                          {/* <h4 className="p-hover-title">Creative Design</h4> */}
                          <p className="p-hover-des">
                            Bla bla bla il est tard{" "}
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              {/* <div id="js-grid-mosaic" className="cbp cbp-l-grid-mosaic">
                <div className="cbp-item web logo">
                  <a
                    href="builder-construction/images/protfolio-1.png"
                    className="cbp-caption cbp-lightbox"
                    data-title="Workout Buddy<br>by Tiberiu Neamu"
                  >
                    <div className="cbp-caption-defaultWrap">
                      <img
                        src="builder-construction/images/protfolio-1.png"
                        alt="img"
                      />
                    </div>
                    <div className="cbp-caption-activeWrap portfolio-hover-effect d-flex align-items-end">
                      <div className="portfolio-inner-content">
                        <span />
                        <span />
                      </div>
                      <div className="hover-text">
                        <h4 className="p-hover-title">Amazing House</h4>
                        <p className="p-hover-des">Awesome Spanish House</p>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="cbp-item print mobile web">
                  <a
                    href="builder-construction/images/portfolio-2.png"
                    className="cbp-caption cbp-lightbox"
                    data-title="Workout Buddy<br>by Tiberiu Neamu"
                  >
                    <div className="cbp-caption-defaultWrap">
                      <img
                        src="builder-construction/images/portfolio-2.png"
                        alt="img"
                      />
                    </div>
                    <div className="cbp-caption-activeWrap portfolio-hover-effect d-flex align-items-end">
                      <div className="portfolio-inner-content">
                        <span />
                        <span />
                      </div>
                      <div className="hover-text">
                        <h4 className="p-hover-title">White House</h4>
                        <p className="p-hover-des">Awesome Spanish House</p>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="cbp-item print logo development web mobile">
                  <a
                    href="builder-construction/images/portfolio-3.png"
                    className="cbp-caption cbp-lightbox"
                    data-title="Workout Buddy<br>by Tiberiu Neamu"
                  >
                    <div className="cbp-caption-defaultWrap">
                      <img
                        src="builder-construction/images/portfolio-3.png"
                        alt="img"
                      />
                    </div>
                    <div className="cbp-caption-activeWrap portfolio-hover-effect d-flex align-items-end">
                      <div className="portfolio-inner-content">
                        <span />
                        <span />
                      </div>
                      <div className="hover-text">
                        <h4 className="p-hover-title">Regency Villa</h4>
                        <p className="p-hover-des">Awesome Spanish House</p>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="cbp-item logo development">
                  <a
                    href="builder-construction/images/portfolio-4.png"
                    className="cbp-caption cbp-lightbox"
                    data-title="Workout Buddy<br>by Tiberiu Neamu"
                  >
                    <div className="cbp-caption-defaultWrap">
                      <img
                        src="builder-construction/images/portfolio-4.png"
                        alt="img"
                      />
                    </div>
                    <div className="cbp-caption-activeWrap portfolio-hover-effect d-flex align-items-end">
                      <div className="portfolio-inner-content">
                        <span />
                        <span />
                      </div>
                      <div className="hover-text">
                        <h4 className="p-hover-title">Creative Design</h4>
                        <p className="p-hover-des">Awesome Spanish House</p>
                      </div>
                    </div>
                  </a>
                </div>
              </div> */}
              {/* <div
                id="js-loadMore-lightbox-gallery"
                className="cbp-l-loadMore-button text-data wow fadeInUp"
                data-wow-delay="650ms"
              >
                <div className="row portfolio-foot-detail text-data-inner">
                  <div className="col-7 col-lg-4 offset-lg-6 text-left pl-4">
                    <span className="p-text">We've Completed More Then</span>
                    <h4 className="p-num">530</h4>
                    <span className="p-text">
                      Projects for Our amazing Clients
                    </span>
                  </div>
                  <div className="col-5 col-lg-2 d-flex justify-content-end align-items-center">
                    <a
                      href="builder-construction/project-detail.html"
                      className="btn pink-and-yellow-btn rounded-pill"
                    >
                      VIEW ALL
                    </a>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Materiel;

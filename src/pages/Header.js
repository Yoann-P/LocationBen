import React from "react";

const Header = () => {
  return (
    <header id="home">
      <nav className="navbar navbar-top-default navbar-expand-lg  nav-box-round navbar-simple nav-line">
        <div className="container">
          <a href="#home" title="Logo" className="logo">
            LOCATION BENNES
          </a>

          <div className="collapse navbar-collapse " id="megaone">
            <div className="navbar-nav m-auto">
              <a className="nav-link active scroll " href="#home">
                Accueil
                <span></span>
              </a>
              <a className="nav-link scroll " href="#materiel">
                Nos Bennes
                <span></span>
              </a>
              <a className="nav-link scroll " href="#devis">
                Obtenir un Devis
                <span></span>
              </a>

              <a className="nav-link scroll " href="#contact">
                Contactez-Nous
                <span></span>
              </a>
            </div>
          </div>

          <a href="/#" className="sidemenu_btn d-lg-none" id="sidemenu_toggle">
            <span></span>
            <span></span>
            <span></span>
          </a>
        </div>
      </nav>

      <div className="side-menu hidden">
        <div className="inner-wrapper">
          <span className="btn-close" id="btn_sideNavClose">
            <i></i>
            <i></i>
          </span>
          <nav className="side-nav w-100">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link scroll" href="#home">
                  Accueil
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link scroll" href="#materiel">
                  Nos Bennes
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link scroll" href="#devis">
                  Obtenir un Devis
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link scroll" href="#contact">
                  Contactez-Nous
                </a>
              </li>
            </ul>
          </nav>
          <div className="side-footer w-100">
            <ul className="social-icons-simple">
              <li>
                <a className="facebook-text-hvr" href="/#">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a className="twitter-text-hvr" href="/#">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a className="linkedin-text-hvr" href="/#">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </li>
              <li>
                <a className="instagram-text-hvr" href="/#">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
            <p>© 2022 myDev. Made With Love by myDev</p>
          </div>
        </div>
      </div>
      <a id="close_side_menu" href="/#">
        X
      </a>
    </header>
  );
};

export default Header;

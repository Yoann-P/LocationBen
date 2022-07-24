import React from "react";

const Header = () => {
  return (
    <header id="home">
      <nav className="navbar navbar-top-default navbar-expand-lg  nav-box-round navbar-simple nav-line">
        <div className="container">
          <a href="#home" title="Logo" className="logo">
            DENN LOCATION
          </a>
          <div className="collapse navbar-collapse" id="megaone">
            <div className="navbar-nav ml-auto">
              <a className="nav-link active scroll " href="#home">
                Accueil
                <span />
              </a>
              <a className="nav-link scroll " href="#materiel">
                Notre Matériel
                <span />
              </a>
              <a className="nav-link scroll " href="#devis">
                Obtenir un devis
                <span />
              </a>
              {/* <a className="nav-link scroll " href="#release">
                Nos Partenaires
                <span />
              </a> */}
              <a className="nav-link scroll " href="#contact">
                Où Sommes Nous?
                <span />
              </a>
            </div>
          </div>
          {/* <a
            href="javascript:void(0)"
            className="sidemenu_btn"
            id="sidemenu_toggle"
          >
            <span />
            <span />
            <span />
          </a> */}
        </div>
      </nav>
      <div className="side-menu hidden">
        <div className="inner-wrapper">
          <span className="btn-close" id="btn_sideNavClose">
            <i />
            <i />
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
                  Notre Matériel
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link scroll" href="#devis">
                  Obtenir un devis
                </a>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link scroll" href="#release">
                  Nos Partenaires
                </a>
              </li> */}
              <li className="nav-item">
                <a className="nav-link scroll" href="#contact">
                  Où Sommes Nous?
                </a>
              </li>
            </ul>
          </nav>
          <div className="side-footer w-100">
            <ul className="social-icons-simple">
              <li>
                <a className="facebook-text-hvr" href="javascript:void(0)">
                  <i className="fab fa-facebook-f" />
                </a>
              </li>
              <li>
                <a className="twitter-text-hvr" href="javascript:void(0)">
                  <i className="fab fa-twitter" />
                </a>
              </li>
              <li>
                <a className="linkedin-text-hvr" href="javascript:void(0)">
                  <i className="fab fa-linkedin-in" />
                </a>
              </li>
              <li>
                <a className="instagram-text-hvr" href="javascript:void(0)">
                  <i className="fab fa-instagram" />
                </a>
              </li>
            </ul>
            <p className>
              © 2022 myDev. Made With Love
              {/* <span className="d-inline d-lg-block"> ThemesIndustry</span> */}
            </p>
          </div>
        </div>
      </div>
      <a id="close_side_menu" href="javascript:void(0);" />
    </header>
  );
};

export default Header;

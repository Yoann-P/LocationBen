import React from "react";

const Accueil = () => {
  return (
    <div>
      <div className="banner-sec bg-accueil position-relative" id="banner">
        <div className="container">
          <div className="row">
            <div className="col-12 align-items-center text-center ">
              <div
                className="heading-area wow slideInLeft"
                data-wow-delay=".7s"
              >
                <h1 className="heading mt-5">
                  Location de
                  <span className="d-block">Matériel BTP</span>
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="header-bottom p-1">
          <h2>
            Entreprise <span className="p-2">Éco-Responsable ♻️</span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Accueil;

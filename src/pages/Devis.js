import React from "react";

const Devis = () => {
  return (
    <section className="bg-black contact-us-sec" id="devis">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-3 d-none d-lg-block text-center">
            <div className="user-img">
              <a href="#home">
                <img className="img-fluid" src="assets/images/truck2.jpeg" alt="img" />
              </a>
            </div>
          </div>
          <div className="col-12 col-md-9">
            <div className="row">
              <div className="col-12" id="result" />
              <div className="col-12 col-md-6">
                <form
                  className="row contact-form row-padding"
                  id="contact-form-data"
                >
                  <div className="col-12">
                    <input
                      type="text"
                      name="userName"
                      placeholder="Nom & Prénom"
                      className="form-control"
                    />
                    <input
                      type="text"
                      name="userLocation"
                      placeholder="Lieu de location"
                      className="form-control"
                    />
                    <input
                      type="tel"
                      name="userphone"
                      placeholder="Téléphone"
                      className="form-control"
                      pattern="[0-9]{8}"
                      required
                    />
                    <input
                      type="email"
                      name="userEmail"
                      placeholder="Email"
                      className="form-control"
                    />
                  </div>
                </form>
              </div>
              <div className="col-12 col-md-6 contact-form">
                <textarea
                  className="form-control"
                  name="userMessage"
                  rows={6}
                  placeholder="Matériel souhaité"
                  defaultValue={""}
                />
                <a
                  href="/#"
                  className="btn btn-medium btn-rounded pink-and-yellow-1-btn rounded-pill w-100 contact_btn main-font"
                >
                  Obtenir Devis Gratuit
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Devis;

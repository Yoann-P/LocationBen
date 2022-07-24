import React from "react";
import Accueil from "./Accueil";
import Header from "./Header";
import Loader from "./Loader";
import Map from "./Map";

import Devis from "./Devis";
import Materiel from "./Materiel";
import Avis from "./Avis";

const Home = () => {
  return (
    <>
      <Loader /> <Header /> <Accueil /> <Materiel />
      <Devis /> <Avis /> <Map />
    </>
  );
};

export default Home;

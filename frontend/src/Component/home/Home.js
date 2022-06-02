import React from "react";
import "./home.css";
import { Link } from "react-router-dom";
// import Gallery from "./Gallery";


function Home() {
  return (
    <div className="mother">
      <div className="home1">
        <h1>L'Azalée Event Planner</h1>
        <h5> DÉCORATEUR ET ORGANISATEUR D’ÉVÉNEMENTS SUR MESURE</h5>
      </div>
      <div className="carts">
        <div className="container">
          <Link to="mariage">
            {" "}
            <div className="box">
              <div className="img"></div>
              <div className="overlay"></div>
              <div className="overlay2"></div>
              <div className="text">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <h2>Mariage</h2>
              </div>
            </div>
          </Link>
          <Link to="fiançailles">
            <div className="box">
              <div className="img2"></div>
              <div className="overlay"></div>
              <div className="overlay2"></div>
              <div className="text">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <h2>Fiançailles</h2>
              </div>
            </div>
          </Link>
          <Link to="anniversaire">
            {" "}
            <div className="box">
              <div className="img3"></div>
              <div className="overlay"></div>
              <div className="overlay2"></div>
              <div className="text">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <h2>Anniversaire</h2>
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* bouton de devis  */}
      <div className="bouton">
        <div className="text">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <p> DEMANDER UN DEVIS </p>
        </div>
      </div>
      {/* en image  */}
      <div className="Images">
        <h1> En images</h1>
        <p>
          Profitez d’un event planner dédié ! Quel événement sur mesure
          souhaitez-vous décorer et organiser ?
        </p>
       {/* <Gallery/>*/}
      </div>
    </div>
  );
}

export default Home;
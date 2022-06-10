import React from "react";
import { Link } from "react-router-dom";
import "./Mariage.css";

function Marketing() {
  return (
    <div className="mother">
      <div className="box1">
<h1> Décorer votre mariage</h1>
      </div>
      <div className="mariage1">
        <div>
          <h1>L'Azalée event planner</h1>
          <h2>
            LA DÉCORATION DE VOTRE MARIAGE
            <br />
            POUR UNE FÊTE ÉTINCELANTE
          </h2>
          <p>
            Les années passent et l’amour grandit, votre moitié s’est lancé dans
            cette folle aventure, elle a tendu la bague et vous avez dit oui !
            <br />
            <br />
            Il était une fois … la venue de vos proches les plus importants à
            vos yeux, ces quelques heures qui fêtent l’amour, la magie d’une
            nuit, il est venu le jour de votre mariage. <br /> <br />
            Pour que votre décoration soit parfaite, confiez cette mission à
            notre event planner et décoratrice professionnelle. Car la
            décoration de votre salle de mariage, la décoration des tables de
            votre mariage doit être minutieusement réfléchie et harmonieuse
            selon votre thème, nous sommes là pour tout organiser.
            <br />
            <br />
            Le jour j, notre chef d’orchestre discret et efficace, rend votre
            journée et soirée agréable, vous vous sentirez tellement plus légers
            !<br />
          </p>
        </div>
        <div className="image1">
          <img src="img20.jpg" alt="mariage" />
        </div>
      </div>
      <div className="boxdevis">
        <h1> Sur devis uniquement</h1> <br/>
        <p>
          {" "}
          Pour la décoration complète de votre mariage : lieu de la cérémonie,
          extérieur, salle de réception, décoration de table,
          <br /> d’ambiance, photocall, coordination le JourJ
        </p>
        
        <Link to="./adddemande">
        {/* bouton de devis  */}
        <div className="bouton">
          <div className="text">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <p> DEMANDER VOTRE DEVIS </p>
          </div>
        </div>
        {/* en image  */}
        </Link>
        
      </div>
    </div>
  );
}

export default Marketing;
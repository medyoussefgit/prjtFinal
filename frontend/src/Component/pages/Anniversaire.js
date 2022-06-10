import React from "react";
import { Link } from "react-router-dom";
import "./Anniversaire.css"
function Design() {
  return (
    <div>
       <div className="box1">
<h1> La magie d’un anniversaire</h1>
      </div>
      <div className="mariage1">
        <div>
          <h1>L'Azalée event planner</h1>
          <h2>
          UN ANNIVERSAIRE DÉCORÉ SUR MESURE POUR UN MOMENT INOUBLIABLE
            <br />
            POUR UN MOMENT INOUBLIABLE
          </h2>
          <p>
          Un anniversaire doit être un merveilleux moment et l’occasion de rassembler autour de vous vos proches les plus chers.
Chez Dreams Come True Events, nous rendons la fête encore plus belle !<br/> <br/>

Imaginez-vous immergé dans le décors de vos rêves, un anniversaire doré, rose gold ou noir et blanc pour vos 18 ans ? 30 ans ? Une arche de ballons orne l’entrée, le candy bar amuse vos invités, la table d’anniversaire est minutieusement décorées et personnalisées à votre nom !<br/> <br/>

Chaque détail vous ravis et l’ambiance bat son plein. Vous y êtes : c’est bien votre anniversaire !<br/><br/>

C’est l’anniversaire de votre p’tit bout ? Vous avez envie de lui faire plaisir en le plongeant dans l’univers de son dessin-animé préféré, on vous aide à voir les choses en grand ! <br/><br/>


          </p>
        </div>
        <div className="image1">
          <img src="img11.jpg" alt="mariage" />
        </div>
      </div>
      <div className="boxdevis">
        <h1> VOTRE ÉVÉNEMENT CLÉ EN MAIN À PARTIR DE 500dt</h1> <br/>
        <p>
        Pour l’organisation, la décoration et les pâtisseries.
        </p>
        
        <Link to="adddemande">
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

export default Design;
/** @format */

import React from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import MainBackground from "../../Components/MainBackground";
import AuditImg from "../../style/assets/img/9.jpg";
import { Link } from "react-router-dom";

const Audit = () => {
  return (
    <div>
      <Header />
      <MainBackground image={AuditImg} title={"Audit"} />
      <div className=" cabinet audit">
        <div className=" cabinet__content audit__content">
          <h1 className=" cabinet__title audit__content__title">Audit</h1>
          <p>
            Nous réalisons un audit complet de l'expérience client de votre
            entreprise, en identifiant les points forts et les points à
            améliorer de votre parcours client actuel. Nous proposons ensuite
            des recommandations pour améliorer votre niveau en expérience client
            et pour maximiser la satisfaction de vos clients. L’audit expérience
            client est une étape incontournable pour avoir une vue d’ensemble
            Sur le degré de maturité d’une entreprise .
          </p>
        </div>
        <div className="cabinet__content audit__details">
          <h2 className="cabinet__title audit__title">
            Notre audit intègre deux types d’enquêtes :
          </h2>
          <div className="audit__details__container">
            <div className="cabinet__more-infos__content__box audit__details__content">
              <i className="fa-solid fa-people-group icon-color icon-size"></i>
              <h2>
                Une enquête interne orientée sur vos collaborateurs et
                l’organisation de travail.
              </h2>
              <Link className="btn-cta new" to="/contacts">
                En savoir plus
              </Link>
            </div>
            <div className="cabinet__more-infos__content__box audit__details__content">
              <i className="fa-solid fa-square-poll-horizontal icon-color icon-size"></i>
              <h2>
                Une enquête externe qui analyse le parcours client et la
                concurrence.
              </h2>
              <Link className="btn-cta new" to="/contacts">
                En savoir plus
              </Link>
            </div>
          </div>
        </div>
        <div className="cabinet__more-infos audit__more-infos">
          <div className="cabinet__more-infos__container audit__more-infos">
            <h2 className="home__expertise__title  audit__expertise">
              Nos autres expertises
            </h2>
            <div className="cabinet__more-infos__container__content">
              <div className="cabinet__more-infos__content audit__more-infos__content">
                <div className="cabinet__more-infos__content__box">
                  <i className="fa-solid fa-stairs icon icon-color"></i>
                  <hgroup>
                    <h2>Stratégies</h2>
                  </hgroup>
                  <Link className="btn-cta new" to="/communication">
                    En savoir plus
                  </Link>
                </div>
                <div className="cabinet__more-infos__content__box">
                  <i className="fa-solid fa-chalkboard-user icon icon-color"></i>
                  <hgroup>
                    <h2>Formations</h2>
                  </hgroup>
                  <Link className="btn-cta new" to="/communication">
                    En savoir plus
                  </Link>
                </div>
                <div className="cabinet__more-infos__content__box">
                  <i className="fa fa-person-chalkboard icon icon-color"></i>
                  <hgroup>
                    <h2>Organisation de conférences</h2>
                  </hgroup>
                  <Link className="btn-cta new" to="/communication">
                    En savoir plus
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Audit;

/** @format */

import React from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Training from "../../style/assets/img/2.jpg";
import MainBackground from "../../Components/MainBackground";
import { Link } from "react-router-dom";

const Formation = () => {
  return (
    <div>
      <Header />
      <MainBackground image={Training} title={"Formations"} />
      <div className=" cabinet audit strategie">
        <div className=" cabinet__content audit__content strategie__content">
          <h1 className=" cabinet__title audit__content__title strategie__content__tile">
            Formations
          </h1>
          <p>
            Nous proposons des formations pratiques pour vous aider à mettre en
            œuvre votre stratégie d’expérience client et pour renforcer les
            compétences de votre équipe. Nous couvrons tous les aspects de
            l'expérience client, y compris la communication avec le client, la
            gestion des plaintes, la mesure de la satisfaction client, et plus
            encore.
          </p>
        </div>
        <div className="strategie__details">
          <div className=" cabinet__content strategie__details__container">
            <div className="strategie__details__content formation__content">
              <div className="strategie__icon">
                <i className="fa-solid fa-chalkboard-user icon icon-color"></i>
                <p>Formation</p>
              </div>
              <div className="strategie__details__infos">
                <p>
                  Parce que l’adoption d’une stratégie Expérience Client est
                  souvent le corolaire bouleversements organisationnels, nous
                  vous proposons d’opérer ce changement en douceur en
                  accompagnant vos collaborateurs à travers des formations
                  individuelles et de groupes adaptées à chaque secteur de
                  métier. <br /> <br /> A la fin de la formation, vos employés
                  seront en mesure de :
                </p>
                <div className="strategie__details__infos__list formation__list">
                  <ul className="list-container ">
                    <li>
                      Comprendre la vision de votre organisation et y adhérer
                    </li>
                    <li>Bâtir un parcours client satisfaisant et efficace</li>
                    <li>
                      Comprendre la vision de votre organisation et y adhérer
                    </li>
                    <li>Définition du positionnement</li>
                  </ul>
                  <ul className="list-container">
                    <li>Bâtir un parcours client satisfaisant et efficace</li>
                    <li>
                      Transformer un prospect en ambassadeur de votre marque
                    </li>
                    <li>Développer une culture client en interne</li>
                    <li>Collecter un feedback du client et l’exploité</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cabinet__more-infos audit__more-infos">
          <div className="cabinet__more-infos__container audit__more-infos">
            <div className="cabinet__more-infos__container__content">
              <h2 className="home__expertise__title  audit__expertise">
                Nos autres expertises
              </h2>
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
                  <i className="fa-solid fa-chart-simple icon icon-color"></i>
                  <hgroup>
                    <h2>Audit</h2>
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

export default Formation;

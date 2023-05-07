/** @format */

import React from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import { Link } from "react-router-dom";
import StratImg from "../../style/assets/img/7.jpg";
import MainBackground from "../../Components/MainBackground";

const Strategie = () => {
  return (
    <div>
      <Header />
      <MainBackground image={StratImg} title={"Stratégie"} />
      <div className=" cabinet audit strategie">
        <div className=" cabinet__content audit__content strategie__content">
          <h1 className=" cabinet__title audit__content__title strategie__content__tile">
            Stratégie
          </h1>
          <p>
            Nous travaillons avec vous pour concevoir une stratégie sur mesure,
            adaptée à vos besoins et à vos objectifs. Nous vous aidons à définir
            votre positionnement, à élaborer un parcours client optimal, à
            développer des interactions positives avec vos clients, et à mettre
            en place des mesures de suivi pour évaluer l'efficacité de votre
            stratégie. Sur la base des données de l’audit Expérience Client nous
            définissons pour votre entreprise une stratégie Expérience Client
            cohérente avec vos objectifs commerciaux et votre positionnement de
            marque. L’objectif d’une stratégie Expérience Client n’est pas
            uniquement de donner à vos employés les clés pour fidéliser la
            clientèle ou créer des ambassadeurs de marque mais de mettre en
            place une véritable culture d’entreprise orientée client tangible à
            chaque point de contact.
          </p>
        </div>
        <div className="strategie__details">
          <div className=" cabinet__content strategie__details__container">
            <div className="strategie__details__content">
              <div className="strategie__icon">
                <i className="fa-regular fa-images icon-image"></i>
                <p>Construire votre image de marque</p>
              </div>
              <div className="strategie__details__infos">
                <p>
                  Nous analysons ce qui fait l’essence de votre marque : ses
                  valeurs, sa vision, sa mission. <br /> <br />
                  Nous étudions également votre audience et la perception
                  qu’elle a de vous. <br /> <br /> Ce travail de fond nous
                  permet de vous positionner sur le marché avec pertinence, pour
                  gagner le cœur de vos clients.
                </p>
                <div className="strategie__details__infos__list">
                  <ul className="list-container">
                    <li>Études de marché</li>
                    <li>Enquête de perception </li>
                    <li>Branding</li>
                    <li>Définition du positionnement</li>
                    <li>Mission de marque</li>
                  </ul>
                  <ul className="list-container">
                    <li>Formalisation de vos objectifs</li>
                    <li>Territoire de communication</li>
                    <li>Création site internet</li>
                    <li>Animation des réseaux sociaux</li>
                    <li>Content Marketing</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="  strategie__details bg">
          <div className=" cabinet__content strategie__details__container">
            <div className="strategie__details__content">
              <div className="strategie__icon">
                <i className="fa-solid fa-globe icon-image"></i>
                <p>Transformation digitale</p>
              </div>
              <div className="strategie__details__infos">
                <p>
                  La révolution numérique porte bien son nom. Elle bouleverse le
                  parcours client, abolit le time-to-market et impose de
                  nouvelles compétences. On estime ainsi que 80 % des emplois de
                  2030 n’existent pas encore ! <br /> <br />
                  AlterEgo vous aide à adapter votre activité et vos process en
                  tirant le meilleur parti des nouvelles technologies. <br />{" "}
                  <br /> Entrons ensemble dans l’ère de la flexibilité et de la
                  communication omnicanal.
                </p>
                <div className="strategie__details__infos__list">
                  <ul className="list-container">
                    <li>Outils de productivité</li>
                    <li>Optimisation de l’expérience client</li>
                    <li>Recherche et partage de l’information</li>
                    <li>Personnalisation</li>
                  </ul>
                  <ul className="list-container">
                    <li>Création de sites</li>
                    <li>SEO, SEA</li>
                    <li>Certification des comptes</li>
                    <li>CRM</li>
                  </ul>
                </div>
              </div>
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
                  <i className="fa-solid fa-chart-simple icon icon-color"></i>
                  <hgroup>
                    <h2>Audit</h2>
                  </hgroup>
                  <Link className="btn-cta new" to="/audit">
                    En savoir plus
                  </Link>
                </div>
                <div className="cabinet__more-infos__content__box">
                  <i className="fa-solid fa-chalkboard-user icon icon-color"></i>
                  <hgroup>
                    <h2>Formations</h2>
                  </hgroup>
                  <Link className="btn-cta new" to="/formations">
                    En savoir plus
                  </Link>
                </div>
                <div className="cabinet__more-infos__content__box">
                  <i className="fa fa-person-chalkboard icon icon-color"></i>
                  <hgroup>
                    <h2>Organisation de conférences</h2>
                  </hgroup>
                  <Link className="btn-cta new" to="/conferences">
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

export default Strategie;

/** @format */

import React from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import home from "../../style/assets/img/homepage.jpg";
import MainBackground from "../../Components/MainBackground";
import { Link } from "react-router-dom";

const Cabinet = () => {
  return (
    <div>
      <Header />
      <MainBackground image={home} title={"Le cabinet"} />
      <main className="cabinet">
        <div className="cabinet__content">
          <h1 className="cabinet__title">Qui sommes-nous ?</h1>
          <p>
            Nous sommes une équipe passionnée et dévouée, prête à aider les
            entreprises à transformer leur relation client en une expérience
            mémorable. Nous croyons fermement que chaque interaction entre une
            entreprise et son client est une opportunité de créer un lien
            durable et de construire une marque forte. C'est pourquoi nous
            mettons notre expertise à votre service pour vous aider à concevoir
            des expériences client uniques et à en tirer le meilleur profit.
            Avec nous, vous êtes assurés de bénéficier d'une approche
            personnalisée, d'une expertise pointue et d'une vision globale de
            l'expérience client. Alors, prêts à transformer votre relation
            client en une expérience exceptionnelle ?
          </p>
        </div>
        <div className="home__expertise">
          <div className="home__expertise__content">
            <h2 className="home__expertise__title">Notre méthodologie</h2>
            <p>
              Nous nous illustrons à travers une approche de travail structurée
              et progressive
            </p>
          </div>
          <div className="home__expertise__details cabinet__expertise">
            <div className="home__expertise__values cabinet__expertise__values">
              <i className="fa-solid fa-ear-listen icon"></i>
              <hgroup>
                <h2>Comprendre</h2>
                <h3>
                  Votre vision, votre ambition et évaluer le degré de
                  compétitivité de L’environnement dans lequel votre entreprise
                  évolue.
                </h3>
              </hgroup>
            </div>
            <div className="home__expertise__values cabinet__expertise__values">
              <i className="fa-solid fa-magnifying-glass-chart icon"></i>
              <hgroup>
                <h2>Analyser</h2>
                <h3>
                  Les données issues d’enquêtes orientées aussi bien auprès de
                  vos collaborateurs Que de vos clients
                </h3>
              </hgroup>
            </div>
            <div className="home__expertise__values cabinet__expertise__values">
              <i className="fa-solid fa-list-check icon"></i>

              <hgroup>
                <h2>Proposer</h2>
                <h3>
                  Une stratégie Expérience Client sur mesure visant à construire
                  une relation Solide et pérenne avec votre clientèle.
                </h3>
              </hgroup>
            </div>
            <div className="home__expertise__values cabinet__expertise__values">
              <i className="fa-solid fa-handshake-simple icon"></i>

              <hgroup>
                <h2>Accompagner</h2>
                <h3>
                  Votre organisation et renforcer vos équipes dans la mise en
                  place d’une culture d’entreprise orientée client.
                </h3>
              </hgroup>
            </div>
          </div>
        </div>

        <div className="cabinet__more-infos">
          <div className="cabinet__more-infos__container">
            <div className="cabinet__more-infos__container__content">
              <div className="cabinet__more-infos__content">
                <div className="cabinet__more-infos__content__box">
                  <i className="fa-solid fa-stairs icon icon-color"></i>
                  <hgroup>
                    <h2>Stratégies</h2>
                    <h3>
                      Nous travaillons avec vous pour concevoir une stratégie
                      sur mesure, adaptée à vos besoins et à vos objectifs.
                    </h3>
                  </hgroup>
                  <Link className="btn-cta new" to="/communication">
                    En savoir plus
                  </Link>
                </div>
                <div className="cabinet__more-infos__content__box">
                  <i className="fa-solid fa-chart-simple icon icon-color"></i>
                  <hgroup>
                    <h2>Audit</h2>
                    <h3>
                      Nous réalisons un audit complet de l'expérience client de
                      votre entreprise, en identifiant les points forts et les
                      points à améliorer de votre parcours client actuel.
                    </h3>
                  </hgroup>
                  <Link className="btn-cta new" to="/communication">
                    En savoir plus
                  </Link>
                </div>
              </div>
              <div className="cabinet__more-infos__content">
                <div className="cabinet__more-infos__content__box">
                  <i className="fa-solid fa-chalkboard-user icon icon-color"></i>
                  <hgroup>
                    <h2>Formations</h2>
                    <h3>
                      Nous proposons des formations pratiques pour vous aider à
                      mettre en œuvre votre stratégie d’expérience client et
                      pour renforcer les compétences de votre équipe.
                    </h3>
                  </hgroup>
                  <Link className="btn-cta new" to="/communication">
                    En savoir plus
                  </Link>
                </div>
                <div className="cabinet__more-infos__content__box">
                  <i className="fa fa-person-chalkboard icon icon-color"></i>
                  <hgroup>
                    <h2>Organisation de conférences</h2>
                    <h3>
                      Nos conférences sur l'expérience client sont conçues pour
                      vous inspirer, vous informer et vous donner des clés pour
                      améliorer la relation client.
                    </h3>
                  </hgroup>
                  <Link className="btn-cta new" to="/communication">
                    En savoir plus
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Cabinet;

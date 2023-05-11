/** @format */

//import React from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import { Link } from "react-router-dom";
import Slider from "../../Components/Slider";
import ApimLogo from "../../style/assets/img/apim.png";
import SamaLogo from "../../style/assets/img/sama.png";
import SupLogo from "../../style/assets/img/la_superette.png";
import ModenaLogo from "../../style/assets/img/modena.png";

const Home = () => {
  return (
    <div>
      <Header />
      <Slider />
      <div className="home">
        <div className="home__content">
          <h1 className="home__title">Vision</h1>
          <p className="home__parap">
            Notre cabinet propose aux organisations publiques et privées de
            construire une relation client de qualité grâce à une stratégie
            taillée sur mesure et traduite en véritable culture d’entreprise.
          </p>
        </div>
        <div className="home__valeurs">
          <div className="home__valeurs__container">
            <hgroup className="home__valeurs__text">
              <h2 className="home__valeurs__text__insight">
                Valeurs et Méthodologie de travail{" "}
              </h2>
              <h3>
                Nous nous illustrons à travers une approche de travail
                structurée et progressive{" "}
              </h3>
              <Link className="home__valeurs__text__cta" to="/le-cabinet">
                En savoir plus
              </Link>
            </hgroup>
          </div>
          <div className="home__valeurs__img"></div>
        </div>
        <div className="home__expertise">
          <div className="home__expertise__content">
            <h2 className="home__expertise__title">Notre expertise</h2>
            <p>
              Nous sommes une équipe passionnée et dévouée, prête à aider les
              entreprises à transformer leur relation client en une expérience
              mémorable.
            </p>
          </div>
          <div className="home__expertise__details">
            <div className="home__expertise__values">
              <i className="fa-solid fa-stairs icon"></i>
              <hgroup>
                <h2>Stratégies</h2>
                <h3>
                  Nous travaillons avec vous pour concevoir une stratégie sur
                  mesure, adaptée à vos besoins et à vos objectifs.
                </h3>
              </hgroup>
              <Link className="btn-cta" to="/strategies">
                En savoir plus
              </Link>
            </div>
            <div className="home__expertise__values">
              <i className="fa-solid fa-chart-simple icon"></i>
              <hgroup>
                <h2>Audit</h2>
                <h3>
                  Nous réalisons un audit complet de l'expérience client de
                  votre entreprise, en identifiant les points forts et les
                  points à améliorer de votre parcours client actuel.
                </h3>
              </hgroup>
              <Link className="btn-cta" to="/audit">
                En savoir plus
              </Link>
            </div>
            <div className="home__expertise__values">
              <i className="fa-solid fa-chalkboard-user icon"></i>

              <hgroup>
                <h2>Formations</h2>
                <h3>
                  Nous proposons des formations pratiques pour vous aider à
                  mettre en œuvre votre stratégie d’expérience client et pour
                  renforcer les compétences de votre équipe.
                </h3>
              </hgroup>
              <Link className="btn-cta" to="/formations">
                En savoir plus
              </Link>
            </div>
            <div className="home__expertise__values">
              <i className="fa fa-person-chalkboard icon"></i>
              <hgroup>
                <h2>Organisation de conférences </h2>
                <h3>
                  Nos conférences sur l'expérience client sont conçues pour vous
                  inspirer, vous informer et vous donner des clés pour améliorer
                  la relation client.
                </h3>
              </hgroup>
              <Link className="btn-cta" to="/conferences">
                En savoir plus
              </Link>
            </div>
          </div>
        </div>
        <div className="home__customer">
          <h2>Ils nous font confiance</h2>
          <div className="home__customer__img">
            <img src={ApimLogo} alt="apim logo de l'entreprise" />
            <img src={ModenaLogo} alt="modena logo de l'entreprise" />
            <img
              className="sama"
              src={SamaLogo}
              alt="modena logo de l'entreprise"
            />
            <img src={SupLogo} alt="modena logo de l'entreprise" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;

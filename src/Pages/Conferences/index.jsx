/** @format */

//import React from "react"
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import { Link } from "react-router-dom";
import MainBackground from "../../Components/MainBackground";
import ConfImg from "../../style/assets/img/conf_1.jpg";

const Conferences = () => {
  return (
    <div>
      <Header />
      <MainBackground image={ConfImg} title={"Organisation de conférences"} />
      <div className=" cabinet audit strategie">
        <div className=" cabinet__content audit__content strategie__content">
          <h1 className=" cabinet__title audit__content__title strategie__content__tile">
            Organisation de conférences
          </h1>
          <p>
            Nos conférences sur l'expérience client sont conçues pour vous
            inspirer, vous informer et vous donner des clés pour améliorer la
            relation client. Nous travaillons avec des experts de renommée
            mondiale dans le domaine de l'expérience client, qui partageront
            avec vous leurs meilleures pratiques et leurs conseils pour offrir
            une expérience client inoubliable. Nos conférences peuvent être
            personnalisées en fonction de vos besoins et de vos objectifs. Nous
            proposons des conférences sur mesure, adaptées à votre secteur
            d'activité et à votre audience.
          </p>
          <div className="conference__cta__container">
            <Link to="/contacts" className="conference__cta__link">
              Contactez-nous dès maintenant
            </Link>
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
                  <Link className="btn-cta new" to="/strategies">
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
                  <i className="fa-solid fa-chart-simple icon icon-color"></i>
                  <hgroup>
                    <h2>Audit</h2>
                  </hgroup>
                  <Link className="btn-cta new" to="/audit">
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

export default Conferences;

/** @format */

//import React from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import HomePage from "../../style/assets/img/homepage.png";
import MainBackground from "../../Components/MainBackground";

const Contact = () => {
  return (
    <div>
      <Header />
      <MainBackground image={HomePage} title={"Contact"} />
      <div className=" cabinet__content contact">
        <div className="contact__container">
          <form className="contact__form">
            <div className="contact__form__name__content">
              <div className="contact__form__name__content__first">
                <label htmlFor="name" id="name">
                  Votre nom
                </label>
                <input type="text" placeholder="Entrez votre nom" />
              </div>
              <div className="contact__form__name__content__last">
                <label htmlFor="lastname" id="lastname">
                  Votre prénom
                </label>
                <input type="text" placeholder="Entrez votre prénom" />
              </div>
            </div>
            <div className="contact__form__details__content">
              <div className="contact__form__details__content__first">
                <label htmlFor="email" id="email">
                  Votre email
                </label>
                <input type="text" />
              </div>
              <div className="contact__form__details__content__last">
                <label htmlFor="number" id="number">
                  Votre numéro de téléphone
                </label>
                <input type="text" name="number" />
              </div>
            </div>
            <div className="contact__form__textarea">
              <label htmlFor="text"></label>
              <textarea name="text" id="text"></textarea>
            </div>
            <input
              type="submit"
              value="Envoyer un message"
              className="submit"
            />
          </form>
          <div className="contact__infos">
            <h1>Infos</h1>
            <div className="contact__infos__business">
              <hgroup>
                <h2>Siège</h2>
                <br />
                <br />
                <h3>
                  Bamako, Hamdallaye ACI 2000, Immeuble Bama en Face siège
                  Aéroport du Mali <br />
                  <br />
                  RCCM: MA.BKO.2021.B.2794
                </h3>
              </hgroup>
            </div>
            <div className="contact__infos__lines">
              <p>Service commerciale</p>
              <br />

              <span>contact@alterego-partners.net</span>
              <br />
              <br />
              <span>+223 44 50 11 92</span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;

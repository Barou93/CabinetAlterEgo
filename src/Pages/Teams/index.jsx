/** @format */

//import React from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import MainBackground from "../../Components/MainBackground";
import TheTeam from "../../style/assets/img/11.jpg";
import CEO from "../../style/assets/img/6.jpg";
import { Link } from "react-router-dom";
import { TeamData } from "../../Components/TeamData";

const Teams = () => {
  return (
    <div>
      <Header />
      <MainBackground image={TheTeam} title={"Notre équipe"} />
      <main className="cabinet team">
        <div className="cabinet__content team__content">
          <h1 className="team__title">
            Nous sommes une équipe de professionnels passionnés par l'expérience
            client, et nous proposons une gamme complète de services pour aider
            les entreprises à améliorer leur expérience client.
          </h1>
        </div>
        <div className="team__profil">
          <div className="team__profil__container">
            {TeamData.map((team) => {
              return (
                <>
                  <div key={team} className={team.class}>
                    <div
                      key={team}
                      className="team__profil__img"
                      style={{
                        backgroundImage: `url('${team.image}')`,
                      }}
                    ></div>
                    <div className="team__profil__infos">
                      <div className="team__profil__infos__title">
                        <hgroup>
                          <h2>{team.name}</h2>
                          <h3>{team.poste}</h3>
                        </hgroup>
                        <p className="team__profil__infos__para">
                          {team.description}
                        </p>
                        <Link
                          to={team.path}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className={team.icon}></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Teams;

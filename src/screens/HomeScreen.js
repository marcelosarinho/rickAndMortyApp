import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/homeScreen.css";

const HomeScreen = () => {
  return (
    <Fragment>
      <Navbar />
      <div>
        <div className="home-title">
          <h1>Web App sobre Rick and Morty</h1>
          <h3>Rick and Morty (em português Rick e Morty) é uma série de animação adulta norte-americana de comédia e ficção científica criada por
            Justin Roiland e Dan Harmon para o bloco de programação noturno Adult Swim, exibido no canal Cartoon Network.</h3>
          <h3>
            O show gira em torno das aventuras dos membros da família Smith, que consiste nos pais Jerry e Beth,
            seus filhos Summer e Morty, e o pai de Beth, chamado Rick Sanchez, que mora com eles como hóspede.
          </h3>
          <h3>Nesse Web App você encontrará:</h3>
        </div>
        <div className="home-info">
          <div className="home-content">
            <Link to="/characters" className="home-link-item">
              <h2>Personagens</h2>
            </Link>
            <img src="https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/large/800/Morty-Smith.Rick-and-Morty.webp" 
            alt="characters"></img>
            <p>Personagens que fazem parte da série, são cerca de 826 personagens!</p>
          </div>
          <div className="home-content">
            <Link to="/locations" className="home-link-item">
              <h2>Localizações</h2>
            </Link>
            <img src="https://i0.wp.com/overmental.com/wp-content/uploads/2015/10/rick-and-morty-evil-base.jpg?ssl=1" alt="locations"></img>
            <p>Localizações que estão presentes nos episódios da série.</p>
          </div>
          <div className="home-content">
            <Link to="/episodes" className="home-link-item">
              <h2>Episódios</h2>
            </Link>
            <img src="https://ovicio.com.br/wp-content/uploads/2021/07/20210706-rick-morty-episode-3.png" alt="episodes"></img>
            <p>Lista com os episódios da série e suas informações. Até o momento, foram gravados 51 episódios para a série.</p>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  )
}

export default HomeScreen;
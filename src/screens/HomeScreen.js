import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const HomeScreen = () => {
  return (
    <Fragment>
      <Navbar />
      <div>
        <h1>Web App de Rick e Morty</h1>
        <h3>Rick and Morty (em português Rick e Morty) é uma série de animação adulta norte-americana de comédia e ficção científica criada por
          Justin Roiland e Dan Harmon para o bloco de programação noturno Adult Swim, exibido no canal Cartoon Network.</h3>
        <h3>Nesse Web App você encontrará:</h3>
        <div>
          <div>
            <Link to="/characters">
              <strong>Personagens</strong>
            </Link>
            <img src="https://static.tvtropes.org/pmwiki/pub/images/morty_smith_2.png" alt="characters"></img>
            <p>Personagens que fazem parte da série, são cerca de 826 personagens!</p>
          </div>
          <div>
            <Link to="/locations">
              <strong>Localizações</strong>
            </Link>
            <img src="https://i0.wp.com/overmental.com/wp-content/uploads/2015/10/rick-and-morty-evil-base.jpg?ssl=1" alt="locations"></img>
            <p>Localizações que estão presentes nos episódios da série.</p>
          </div>
          <div>
            <Link to="/episodes">
              <strong>Episódios</strong>
            </Link>
            <img src="https://ovicio.com.br/wp-content/uploads/2021/07/20210706-rick-morty-episode-3.png" alt="episodes"></img>
            <p>Lista com os episódios da série e suas informações.</p>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  )
}

export default HomeScreen;
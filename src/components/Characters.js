import React, { Fragment } from "react";
import Character from "./Character";
import Pagination from "./Pagination";
import Loading from "../components/Loading";
import "../styles/characters.css";

const Characters = (props) => {

  const { characters, loading, page, totalPages, setPage } = props;

  const onClickNext = () => {
    if (page !== totalPages)
      setPage(page + 1);
  }

  const onClickPrevious = () => {
    if (page > 1)
      setPage(page - 1);
  }


  return (
    <div>
      <div className="characters-title">
        <h1>Personagens</h1>
      </div>
      {loading ? (<Loading />
      ) : (
        <Fragment>
          <div className="characters-grid">
            {characters.map((character, index) => {
              return (
                <Character key={index} character={character} />
              )
            })}
          </div>
          <Pagination page={page} totalPages={totalPages} onClickNext={onClickNext} onClickPrevious={onClickPrevious} />
        </Fragment>
      )}
    </div>
  )
}

export default Characters;
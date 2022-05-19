import React, { Fragment } from "react";
import Episode from "../components/Episode";
import Pagination from "./Pagination";

const Episodes = (props) => {

  const { episodes, loading, page, totalPages, setPage } = props;

  const onClickNext = () => {
    if (page !== totalPages)
      setPage(page + 1);
  }

  const onClickPrevious = () => {
    if (page > 1)
      setPage(page - 1);
  }

  return (
    <Fragment>
      <p className="alert-text">OBS: A API não fornece imagens para os episódios.</p>
      <div className="episodes-title">
        <h1>Episódios</h1>
      </div>
      {loading ? (<div>Carregando os episódios...</div>
      ) : (
        <div className="episodes-grid">
          {episodes.map((episode, index) => {
            return (
              <Episode key={index} episode={episode} />
            )
          })}
        </div>
      )}
      <div><Pagination page={page} totalPages={totalPages} onClickNext={onClickNext} onClickPrevious={onClickPrevious} /></div>
    </Fragment>
  )
}

export default Episodes;
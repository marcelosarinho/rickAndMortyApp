import React from "react";

const Pagination = (props) => {

  const { page, totalPages, onClickNext, onClickPrevious } = props;

  return (
    <div className="pagination-div">
      <button onClick={onClickPrevious}>Anterior</button>
      <div>{page} de {totalPages}</div>
      <button onClick={onClickNext}>Próximo</button>
    </div>
  )
}

export default Pagination;
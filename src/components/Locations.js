import React, { Fragment } from "react";
import Location from "../components/Location";
import Pagination from "./Pagination";
import Loading from "../components/Loading";
import "../styles/alert.css";
import "../styles/locations.css";

const Locations = (props) => {

  const { locations, loading, page, totalPages, setPage } = props;

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
      <p className="alert-text">OBS: A API não fornece imagens para as localizações.</p>
      <div className="locations-title">
        <h1>Localizações</h1>
      </div>
      {loading ? (<Loading />
      ) : (
        <Fragment>
          <div className="locations-grid">
            {locations.map((location, index) => {
              return (
                <Location key={index} location={location} />
              )
            })}
          </div>
          <Pagination page={page} totalPages={totalPages} onClickNext={onClickNext} onClickPrevious={onClickPrevious} />
        </Fragment>
      )}
    </Fragment>
  )
}

export default Locations;
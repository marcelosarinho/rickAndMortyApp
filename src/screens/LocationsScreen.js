import React, { Fragment, useEffect, useState } from "react";
import Locations from "../components/Locations";
import Navbar from "../components/Navbar";
import { getLocations, getLocationData } from "../api";

const LocationsScreen = () => {

  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const itensPerPage = 20;

  const fetchLocations = async () => {
    try {
      setLoading(true);
      const data = await getLocations(page);
      const promises = data.results.map(async (location) => {
        return await getLocationData(location.url);
      })
      const results = await Promise.all(promises);
      setLocations(results);
      setLoading(false);
      setTotalPages(Math.ceil(data.info.count / itensPerPage))
    } catch (error) {
      console.log(`Fetch Locations error: ${error}`)
    }
  }

  useEffect(() => {
    fetchLocations();
  }, [page])

  return (
    <Fragment>
      <Navbar />
      <Locations locations={locations} loading={loading} page={page} totalPages={totalPages} setPage={setPage} />
    </Fragment>
  )
}

export default LocationsScreen;
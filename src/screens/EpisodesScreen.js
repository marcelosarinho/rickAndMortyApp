import React, { Fragment, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { getEpisodes, getEpisodesData } from "../api";
import Episodes from "../components/Episodes";

const EpisodesScreen = () => {

  const [episodes, setEpisodes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const itensPerPage = 20;

  const fetchEpisodes = async () => {
    try {
      setLoading(true);
      const data = await getEpisodes(page);
      const promises = data.results.map(async (episode) => {
        return await getEpisodesData(episode.url);
      })
      const results = await Promise.all(promises);
      setEpisodes(results);
      setLoading(false);
      setTotalPages(Math.ceil(data.info.count / itensPerPage));
    } catch (error) {
      console.log(`Fetch Episodes error: ${error}`);
    }
  }

  useEffect(() => {
    fetchEpisodes();
  }, [page])

  return (
    <Fragment>
      <Navbar />
      <Episodes episodes={episodes} loading={loading} page={page} totalPages={totalPages} setPage={setPage} />
    </Fragment>
  )
}

export default EpisodesScreen;
import React, { useState, useEffect, Fragment } from "react";
import Characters from "../components/Characters";
import { getCharacters, getCharacterData } from "../api";
import Navbar from "../components/Navbar";

const CharactersScreen = () => {

  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const itensPerPage = 20;

  const fetchCharacters = async () => {
    try {
      setLoading(true);
      const data = await getCharacters(page);
      const promises = data.results.map(async (character) => {
        return await getCharacterData(character.url);
      })
      const results = await Promise.all(promises);
      setCharacters(results);
      setLoading(false);
      setTotalPages(Math.ceil(data.info.count / itensPerPage));
    } catch (error) {
      console.log(`Fetch Characters error: ${error}`);
    }
  }

  useEffect(() => {
    fetchCharacters();
  }, [page])

  return (
    <Fragment>
      <Navbar />
      <Characters characters={characters} loading={loading} page={page} totalPages={totalPages} setPage={setPage} />
    </Fragment>
  )
}

export default CharactersScreen;
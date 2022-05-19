export const getCharacters = async (page) => {
  try {
    let url = `https://rickandmortyapi.com/api/character/?page=${page}`;
    const data = await fetch(url);
    return await data.json();
  } catch (error) {
    console.log(`Erro: ${error}`);
  }
}

export const getCharacterData = async (url) => {
  try {
    const data = await fetch(url);
    return await data.json();
  } catch (error) {
    console.log(`Erro: ${error}`);
  }
}

export const getLocations = async (page) => {
  try {
    let url = `https://rickandmortyapi.com/api/location?page=${page}`;
    const data = await fetch(url);
    return await data.json();
  } catch (error) {
    console.log(`Erro: ${error}`);
  }
}

export const getLocationData = async (url) => {
  try {
    const data = await fetch(url);
    return await data.json();
  } catch (error) {
    console.log(`Erro: ${error}`);
  }
}

export const getEpisodes = async (page) => {
  try {
    let url = `https://rickandmortyapi.com/api/episode?page=${page}`;
    const data = await fetch(url);
    return await data.json();
  } catch (error) {
    console.log(`Erro: ${error}`);
  }
}

export const getEpisodesData = async (url) => {
  try {
    const data = await fetch(url);
    return await data.json();
  } catch (error) {
    console.log(`Erro: ${error}`);
  }
}
import React from "react";
import HomeScreen from "./screens/HomeScreen";
import CharactersScreen from "./screens/CharactersScreen";
import LocationsScreen from "./screens/LocationsScreen";
import EpisodesScreen from "./screens/EpisodesScreen";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/characters" element={<CharactersScreen />} />
      <Route path="/locations" element={<LocationsScreen />} />
      <Route path="/episodes" element={<EpisodesScreen />} />
    </Routes>
  </BrowserRouter>
)

export default AppRoutes;
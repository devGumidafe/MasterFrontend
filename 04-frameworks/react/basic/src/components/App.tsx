import React, { FC } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { GitHubProvider } from "./context/GitHubProvider";
import { RickMortyProvider } from "./context/RickMortyProvider";
import { Detail } from "./pages/Detail";
import { Home } from "./pages/Home";
import { List } from "./pages/List";

import { CssBaseline } from "@mui/material";

export const App: FC = () => {
  return (
    <GitHubProvider>
      <RickMortyProvider>
        <CssBaseline />
        <Router>
          <Routes>
            <Route path="/list/:page" element={<List />} />
            <Route path="/detail/:page/:id" element={<Detail />} />

            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </RickMortyProvider>
    </GitHubProvider>
  );
};

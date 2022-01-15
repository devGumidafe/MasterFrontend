import { CssBaseline } from "@mui/material";
import React, { FC } from "react";
import { ImageProvider } from "./components/context/ImageProvider";
import { Home } from "./components/pages/Home";

export const App: FC = () => {
  return (
    <ImageProvider>
      <CssBaseline>
        <Home />
      </CssBaseline>
    </ImageProvider>
  );
};

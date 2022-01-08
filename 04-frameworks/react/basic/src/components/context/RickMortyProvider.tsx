import React, { FC, useContext, useState } from "react";
import { RicKMortyContext } from "./RickMortyContext";
import { RickMortyEntity } from "../../model/RickMortyEntity";

export const RickMortyProvider: FC = (props) => {
  const [filter, setFilter] = useState("rick");
  const [characters, setCharacters] = useState<RickMortyEntity[]>([]);

  return (
    <RicKMortyContext.Provider
      value={{ filter, setFilter, characters, setCharacters }}
    >
      {props.children}
    </RicKMortyContext.Provider>
  );
};

export const useRickMortyContext = () => {
  return useContext(RicKMortyContext);
};

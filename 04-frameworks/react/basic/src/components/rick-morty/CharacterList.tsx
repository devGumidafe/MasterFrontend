import React, { FC, useEffect } from "react";
import { Link } from "react-router-dom";
import { Search } from "../Search";
import { Character } from "./Character";
import { useRickMortyContext } from "../context/RickMortyProvider";
import { useAxiosRickMorty } from "../hooks/useAxiosRickMorty";

import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { Container, ImageList, Pagination, styled } from "@mui/material";

const StyleContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  height: 100vh;
  width: 100%;
`;

const StyleImgList = styled(ImageList)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;

  @media (min-width: 600px) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
`;

export const CharacterList: FC = () => {
  const { loading, currentPage, setCurrentPage, totalPages } =
    useAxiosRickMorty();
  const { characters, filter, setFilter } = useRickMortyContext();

  const handlePage = (event: React.ChangeEvent<unknown>, value: number) => {
    event.preventDefault();
    setCurrentPage(value);
  };

  const handleSearch = (value: string) => {
    setFilter(value);
  };

  return (
    <StyleContainer>
      <Link to="/">Volver al Home</Link>

      <Search
        placeholder={"Busca un personaje"}
        filter={filter}
        handleSearch={handleSearch}
      />

      {loading ? (
        <Box sx={{ display: "flex" }}>
          <CircularProgress />
        </Box>
      ) : (
        <>
          <StyleImgList>
            {characters.map((character) => (
              <Character key={character.id} {...character} />
            ))}
          </StyleImgList>
        </>
      )}

      <Pagination
        count={totalPages}
        color="primary"
        onChange={handlePage}
        page={currentPage}
        sx={{ marginTop: "1rem" }}
      />
    </StyleContainer>
  );
};

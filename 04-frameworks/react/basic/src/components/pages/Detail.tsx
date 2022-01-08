import React, { FC } from "react";
import { MemberDetail } from "../github/MemberDetail";
import { useParams } from "react-router-dom";
import { CharacterDetail } from "../rick-morty/CharacterDetail";

import { Container } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledContainer = styled(Container)`
  display: grid;
  place-items: center;
  height: 100vh;
`;

export const Detail: FC = () => {
  const { page } = useParams();

  return (
    <StyledContainer>
      {page === "github" ? <MemberDetail /> : <CharacterDetail />}
    </StyledContainer>
  );
};

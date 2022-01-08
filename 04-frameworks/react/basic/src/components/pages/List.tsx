import React, { FC } from "react";
import { MemberList } from "../github/MemberList";
import { CharacterList } from "../rick-morty/CharacterList";

import { Container } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useParams } from "react-router-dom";

const StyledContainer = styled(Container)`
  display: grid;
  place-items: center;
  padding: 2rem;
  margin-top: 2rem;
  width: 80%;
  border-radius: 0.5rem;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
`;

export const List: FC = () => {
  const { page } = useParams();

  return (
    <StyledContainer>
      {page === "github" ? <MemberList /> : <CharacterList />}
    </StyledContainer>
  );
};

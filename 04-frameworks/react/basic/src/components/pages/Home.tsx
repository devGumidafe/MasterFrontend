import React, { FC } from "react";
import { Link } from "react-router-dom";
import rickImg from "../../assets/rick.jpeg";
import gitHubImg from "../../assets/github.jpeg";

import { Container, styled } from "@mui/material";

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 100vh;
`;

const StyleImg = styled("img")`
  border-radius: 20px;
  border: 1px solid #ccc;
  width: 150px;

  @media (min-width: 768px) {
    width: 300px;
  }
`;

export const Home: FC = () => {
  return (
    <StyledContainer>
      <Link to={"/list/github"}>
        <StyleImg src={gitHubImg} alt="img github" />
      </Link>

      <Link to={"/list/rick"}>
        <StyleImg src={rickImg} alt="img rick" />
      </Link>
    </StyledContainer>
  );
};

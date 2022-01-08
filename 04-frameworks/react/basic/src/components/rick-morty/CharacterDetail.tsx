import React, { FC } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useRickMortyContext } from "../context/RickMortyProvider";

import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Divider,
} from "@mui/material";
import { styled } from "@mui/material";

const StyleCard = styled(Card)`
  width: 320px;
`;

const StyleCardMedia = styled(CardMedia)`
object-fit: cover; 
background-position: center, 
width: 100%;
height: 100%;
cursor: default;
`;

export const CharacterDetail: FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { characters } = useRickMortyContext();
  const character = characters.find((character) => character.id === Number(id));

  const handleNavigation = () => {
    navigate("/list/rick");
  };

  return (
    <StyleCard>
      <CardActionArea>
        <StyleCardMedia
          component="img"
          image={character?.image}
          alt="avatar member"
        />
        <CardContent sx={{ cursor: "default" }}>
          <Typography gutterBottom variant="h5" component="div">
            Nombre: {character?.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="div">
            Especie: {character?.species}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="div">
            Estado: {character?.status}
          </Typography>
        </CardContent>
      </CardActionArea>
      <Divider />
      <CardActions sx={{ display: "grid", placeItems: "center" }}>
        <Button
          size="small"
          color="primary"
          variant="outlined"
          onClick={handleNavigation}
        >
          Volver al listado
        </Button>
      </CardActions>
    </StyleCard>
  );
};

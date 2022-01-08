import React, { FC } from "react";
import { ImageListItem, ImageListItemBar, styled } from "@mui/material";
import { RickMortyEntity } from "../../model/RickMortyEntity";
import { useNavigate } from "react-router-dom";

const StyleImageListItem = styled(ImageListItem)`
  cursor: pointer;
  min-width: 200px;
`;

export const Character: FC<RickMortyEntity> = (props) => {
  const { id, name, species, image } = props;

  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate(`/detail/rick/${id}`);
  };

  return (
    <StyleImageListItem onClick={handleNavigation}>
      <img src={image} alt={name} loading="lazy" />
      <ImageListItemBar
        title={name}
        subtitle={<span>Especie: {species}</span>}
        position="below"
      />
    </StyleImageListItem>
  );
};

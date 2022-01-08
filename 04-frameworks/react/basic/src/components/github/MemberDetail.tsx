import React, { FC } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useGitHubContext } from "../context/GitHubProvider";

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
cursor: none;
`;

export const MemberDetail: FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { members } = useGitHubContext();
  const member = members.find((member) => member.login === id);

  const handleNavigation = () => {
    navigate("/list/github");
  };

  return (
    <StyleCard>
      <CardActionArea>
        <StyleCardMedia
          component="img"
          image={member?.avatar_url}
          alt="avatar member"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {member?.login}
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

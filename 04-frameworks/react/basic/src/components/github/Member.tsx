import React, { FC } from "react";
import { useNavigate } from "react-router-dom";

import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { MemberEntity } from "../../model/MemberEntity";
import { Divider, styled } from "@mui/material";

const StyleListItem = styled(ListItem)`
  cursor: default;

  &:hover {
    background-color: #1976d2;
    color: white;
  }
`;

export const Member: FC<MemberEntity> = (props) => {
  const { id, login, avatar_url } = props;
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate(`/detail/github/${login}`);
  };

  return (
    <>
      <StyleListItem alignItems="flex-start" onClick={handleNavigation}>
        <ListItemAvatar>
          <Avatar alt="Member Avatar" src={avatar_url} />
        </ListItemAvatar>
        <ListItemText
          primary={login}
          secondary={<React.Fragment>ID: {id}</React.Fragment>}
        />
      </StyleListItem>
      <Divider variant="inset" component="li" />
    </>
  );
};

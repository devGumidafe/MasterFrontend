import React, { FC } from "react";

import {
  Avatar,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { ImageInfo } from "../../data/imageInfo";

interface Props {
  image: ImageInfo;
  handleDeleteItem: (id: number) => void;
}

export const CartItem: FC<Props> = (props) => {
  const { image, handleDeleteItem } = props;

  return (
    <div>
      <ListItem
        key={image.id}
        secondaryAction={
          <IconButton edge="end" aria-label="delete">
            <DeleteIcon onClick={() => handleDeleteItem(image.id)} />
          </IconButton>
        }
      >
        <ListItemAvatar>
          <Avatar alt={image.title} src={image.url} />
        </ListItemAvatar>
        <ListItemText primary={image.title} />
      </ListItem>
    </div>
  );
};

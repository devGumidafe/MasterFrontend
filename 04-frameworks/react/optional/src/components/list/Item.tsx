import React, { FC } from "react";

import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import { Checkbox, ImageList } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { ImageInfo } from "../../data/imageInfo";

interface Props {
  item: ImageInfo;
  handleSelect: (id: number) => void;
}

export const Item: FC<Props> = (props) => {
  const { item, handleSelect } = props;

  return (
    <ImageListItem key={item.id} className="animate__animated animate__fadeInLeft">
      <img src={item.url} alt={item.title} loading="lazy" />
      <ImageListItemBar
        title={item.title}
        actionIcon={
          <Checkbox
            icon={<ShoppingCartOutlinedIcon />}
            checkedIcon={<ShoppingCartIcon />}
            onChange={(e) => handleSelect(item.id)}
            checked={item.selected}
            sx={{
              color: "white",
              "&.Mui-checked": {
                color: "red",
              },
            }}
          />
        }
      />
    </ImageListItem>
  );
};

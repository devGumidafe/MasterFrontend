import React, { FC, useEffect, useState } from "react";
import { ImageInfo } from "../../data/imageInfo";
import { CartItem } from "./CartItem";

import { List } from "@mui/material";
import { StyleContainer } from "./Style";

interface Props {
  imageList: ImageInfo[];
  handleDeleteItem: (id: number) => void;
}

export const Cart: FC<Props> = (props) => {
  const { imageList, handleDeleteItem } = props;
  const [cartList, setCartList] = useState<ImageInfo[]>([]);

  useEffect(() => {
    setCartList(imageList.filter((image) => image.selected));
  }, [imageList]);

  return (
    <StyleContainer>
      <h2>My Cart</h2>
      {cartList.length === 0 ? <p>No items in cart.</p> : null}
      <List>
        {cartList.map((image) => (
          <CartItem
            key={image.id}
            image={image}
            handleDeleteItem={handleDeleteItem}
          />
        ))}
      </List>
    </StyleContainer>
  );
};

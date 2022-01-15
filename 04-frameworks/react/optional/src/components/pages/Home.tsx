import React, { FC, useState } from "react";
import { useImageContext } from "../hooks/useImageContext";
import { Cart } from "../cart/Cart";
import { NavBar } from "../NavBar";

import { StyleContainer } from "./style";
import Drawer from "@mui/material/Drawer";
import { List } from "../list/List";

export const Home: FC = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const { imageList, selectImage } = useImageContext();
  const [selectPage, setSelectPage] = useState("dog");

  const totalItems = imageList.filter((image) => image.selected).length;

  const handleSelectPage = (page: string) => {
    setSelectPage(page);
  };

  const handleOpenCart = () => {
    setCartOpen(true);
  };

  const handleDeleteItem = (id: number) => {
    selectImage(id);
  };

  return (
    <>
      <NavBar
        handleSelectPage={handleSelectPage}
        handleOpenCart={handleOpenCart}
        totalItems={totalItems}
      />
      <StyleContainer>
        <Drawer
          anchor="right"
          open={cartOpen}
          onClose={() => setCartOpen(false)}
        >
          <Cart imageList={imageList} handleDeleteItem={handleDeleteItem} />
        </Drawer>

        <List type={selectPage}/>
      </StyleContainer>
    </>
  );
};

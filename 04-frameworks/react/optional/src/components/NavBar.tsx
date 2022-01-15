import React, { FC } from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

interface Props {
  handleSelectPage: (page: string) => void;
  handleOpenCart: () => void;
  totalItems: number;
}

export const NavBar: FC<Props> = (props) => {
  const { handleSelectPage, handleOpenCart, totalItems } = props;

  return (
    <AppBar position="fixed">
      <Toolbar>
        <Box
          sx={{ flexGrow: 1, display: { xs: "flex", gap: "1rem" } }}
        >
          <Button color="inherit" onClick={() => handleSelectPage("dog")}>
            Dogs
          </Button>
          <Button color="inherit" onClick={() => handleSelectPage("cat")}>
            Cats
          </Button>
        </Box>
        <IconButton onClick={handleOpenCart} sx={{color: 'white'}}>
          <Badge badgeContent={totalItems} color="error">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

import React, { FC } from "react";
import { useImageContext } from "../hooks/useImageContext";
import { Item } from "./Item";
import { useCustomList } from "../hooks/useCustomList";

import { ImageList } from "@mui/material";

interface Props {
  type: string;
}

export const List: FC<Props> = (props) => {
  const { type } = props;

  const { imageList, selectImage } = useImageContext();
  const typeList = imageList.filter((image) => image.type === type);
  const { columns } = useCustomList();

  const handleSelect = (id: number) => {
    selectImage(id);
  };

  return (
    <div className="animate__animated animate__backInDown">
      <ImageList cols={columns} gap={5} sx={{ marginTop: "3rem" }}>
        {typeList.map((item) => (
          <Item key={item.id} item={item} handleSelect={handleSelect} />
        ))}
      </ImageList>
    </div>
  );
};

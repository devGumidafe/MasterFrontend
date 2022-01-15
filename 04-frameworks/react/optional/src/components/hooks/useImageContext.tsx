import React, { useContext, useEffect } from "react";
import { ImageContext } from "../context/ImageContext";

export const useImageContext = () => {
  const { imageList, setImageList } = useContext(ImageContext);

  const selectImage = (id: number) => {
    setImageList(
      imageList.map((image) =>
        image.id === id ? { ...image, selected: !image.selected } : image
      )
    );
  };

  return { imageList, selectImage };
};

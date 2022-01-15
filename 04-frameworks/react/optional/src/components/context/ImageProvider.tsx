import React, { FC,useEffect,useState} from "react";
import { ImageInfo, images} from "../../data/imageInfo";
import { ImageContext } from "./ImageContext";

export const ImageProvider: FC = (props) => {
  const [imageList, setImageList] = useState<ImageInfo[]>([]);

  useEffect(() => {
    setImageList(images);
  }, []);

  return (
    <ImageContext.Provider value={{imageList, setImageList}}>
      {props.children}
    </ImageContext.Provider>
  );
};

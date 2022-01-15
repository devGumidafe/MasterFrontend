import {createContext} from 'react';
import { ImageInfo } from "../../data/imageInfo";

interface Props {
    imageList: ImageInfo [];
    setImageList: (imageList: ImageInfo []) => void;
}

export const ImageContext = createContext<Props>({
    imageList: [],
    setImageList: (images: ImageInfo[]) => {}
});
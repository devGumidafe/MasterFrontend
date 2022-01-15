import { imageUrls } from "./imageUrls";

export interface ImageInfo {
    id: number;
    url: string;
    title: string;
    type: string;
    selected: boolean;
}

export const images: ImageInfo[] = [
    {
        id: 1,
        url: imageUrls.cat1,
        title: 'Cat 1',
        type: 'cat',
        selected: false
    },
    {
        id: 2,
        url: imageUrls.cat2,
        title: 'Cat 2',
        type: 'cat',
        selected: false
    },
    {
        id: 3,
        url: imageUrls.cat3,
        title: 'Cat 3',
        type: 'cat',
        selected: false
    },
    {
        id: 4,
        url: imageUrls.cat4,
        title: 'Cat 4',
        type: 'cat',
        selected: false
    },
    {
        id: 5,
        url: imageUrls.cat5,
        title: 'Cat 5',
        type: 'cat',
        selected: false
    },
    {
        id: 6,
        url: imageUrls.cat6,
        title: 'Cat 6',
        type: 'cat',
        selected: false
    },
    {
        id: 7,
        url: imageUrls.dog1,
        title: 'Dog 1',
        type: 'dog',
        selected: false
    },
    {
        id: 8,
        url: imageUrls.dog2,
        title: 'Dog 2',
        type: 'dog',
        selected: false
    },
    {
        id: 9,
        url: imageUrls.dog3,
        title: 'Dog 3',
        type: 'dog',
        selected: false
    },
    {
        id: 10,
        url: imageUrls.dog4,
        title: 'Dog 4',
        type: 'dog',
        selected: false
    },
    {
        id: 11,
        url: imageUrls.dog5,
        title: 'Dog 5',
        type: 'dog',
        selected: false
    },
    {
        id: 12,
        url: imageUrls.dog6,
        title: 'Dog 6',
        type: 'dog',
        selected: false
    },
];

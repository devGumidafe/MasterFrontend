import { createContext } from 'react';
import { RickMortyEntity } from '../../model/RickMortyEntity';

interface ContextProps {
    filter: string;
    setFilter: (filter: string) => void;
    characters: RickMortyEntity[];
    setCharacters: (characters: RickMortyEntity[]) => void;
}

export const RicKMortyContext = createContext<ContextProps>({
    filter: '',
    setFilter: (filter: string) => { },
    characters: [],
    setCharacters: (characters: RickMortyEntity[]) => { },
});
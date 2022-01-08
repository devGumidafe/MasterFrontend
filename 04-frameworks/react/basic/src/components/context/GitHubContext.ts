import { createContext } from 'react';
import { MemberEntity } from './../../model/MemberEntity';

interface ContextProps {
    filter: string;
    setFilter: (filter: string) => void;
    members: MemberEntity[];
    setMembers: (members: MemberEntity[]) => void;
}

export const GitHubContext = createContext<ContextProps>({
    filter: '',
    setFilter: (filter: string) => { },
    members: [],
    setMembers: (members: MemberEntity[]) => { },
});
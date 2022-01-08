import { useRickMortyContext } from './../context/RickMortyProvider';
import { apiRickAndMorty } from '../../api/apiConfig';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useTotalPageGitHub } from './useTotalPageGitHub';

export const useAxiosRickMorty = () => {
    const baseUrl = apiRickAndMorty.baseUrl;

    const { setCharacters, filter } = useRickMortyContext()
    const [loading, setLoading] = useState<boolean>(true);
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [totalPages, setTotalPages] = useState(0);

    const fetchData = async () => {
        try {
            const res = await axios.get(baseUrl + apiRickAndMorty.characterList(filter, currentPage));
            setCharacters(res.data.results);
            setTotalPages(Math.ceil(res.data.results.length / 5));
        }
        catch (err) {
            console.log(err);
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchData();
    }, [filter, currentPage]);

    useEffect(() => {
        setCurrentPage(1);
    }, [filter]);

    return { loading, currentPage, setCurrentPage, totalPages };
};



import { useState, useEffect } from 'react';
import axios from 'axios';

import { apiGithub } from '../../api/apiConfig';
import { useGitHubContext } from '../context/GitHubProvider';


export const useAxiosGitHub = () => {
    const baseUrl = apiGithub.baseUrl;
    const { setMembers, filter } = useGitHubContext()
    const [loading, setLoading] = useState<boolean>(true);
    const [currentPage, setCurrentPage] = useState<number>(1)

    const fetchData = async () => {
        try {
            const res = await axios.get(baseUrl + apiGithub.org(filter, 5, currentPage));
            setMembers(res.data);

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

    return { loading, currentPage, setCurrentPage };
};



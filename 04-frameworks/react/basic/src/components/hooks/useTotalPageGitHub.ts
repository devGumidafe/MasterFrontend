import { useEffect, useState } from "react";
import axios from "axios";
import { useGitHubContext } from "../context/GitHubProvider";

export const useTotalPageGitHub = () => {
    const [totalPages, setTotalPages] = useState<number>(0);
    const { filter } = useGitHubContext()

    const fetchTotalPages = async () => {
        try {
            const res = await axios.get(`https://api.github.com/orgs/${filter}/members`);
            setTotalPages(Math.ceil(res.data.length / 5));
        }
        catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        fetchTotalPages();
    }, [filter])

    return {
        totalPages,
    }
}
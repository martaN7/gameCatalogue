import axios from 'axios';
import { API_HOST, API_KEY } from '../constants.ts';
import { useEffect, useState } from 'react';

const localcache = {};

interface useFetchGamesProps {
    platform: string;
}

export function useFetchGames({ platform }: useFetchGamesProps) {
    const [games, setGames] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const controller = new AbortController();

        if (localcache[`${platform}`]) {
            setGames(localcache[`${platform}`]);
        } else {
            getGames(controller.signal);
        }
        return () => controller.abort();
    }, [platform]);

    async function getGames(signal) {
        const response = await axios({
            method: 'GET',
            url: `https://${API_HOST}/api/games`,
            headers: {
                'X-RapidAPI-Key': API_KEY,
                'X-RapidAPI-Host': API_HOST,
            },
            params: { platform },
            signal,
        });
        if (response.data.status !== 0) {
            localcache[`${platform}`] = response.data;
            setGames(localcache[`${platform}`]);
        } else {
            setGames([]);
        }
    }

    return { games, error };
}

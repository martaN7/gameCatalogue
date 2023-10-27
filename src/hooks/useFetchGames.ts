import axios from 'axios';
import { API_HOST, API_KEY } from '../constants.ts';
import { useEffect, useState } from 'react';
import { filterTypes, Game } from '../types.ts';

const localcache: { [key: string]: Game[] } = {};

export function useFetchGames({ platform, sortBy, genre }: filterTypes) {
    const [games, setGames] = useState<Game[] | null>([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const controller = new AbortController();

        if (localcache[`${platform}${sortBy}${genre}`]) {
            setGames(localcache[`${platform}${sortBy}${genre}`]);
        } else {
            getGames(controller.signal);
        }
        return () => controller.abort();
    }, [platform, sortBy, genre]);

    async function getGames(signal: AbortSignal) {
        const response = await axios({
            method: 'GET',
            url: `https://${API_HOST}/api/games`,
            headers: {
                'X-RapidAPI-Key': API_KEY,
                'X-RapidAPI-Host': API_HOST,
            },
            params: { platform, category: genre, 'sort-by': sortBy },
            signal,
        });
        if (response.data.status !== 0) {
            localcache[`${platform}${sortBy}${genre}`] = response.data;
            setGames(localcache[`${platform}${sortBy}${genre}`]);
        } else {
            setGames([]);
        }
    }

    return { games, error };
}

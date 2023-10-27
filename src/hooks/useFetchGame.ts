import { useEffect, useState } from 'react';
import axios from 'axios';
import { API_HOST, API_KEY } from '../constants';
import { Game } from '../types.ts';

const useFetchGame = (id: string) => {
    const [game, setGame] = useState<Game | null>(null);
    const [errors, setErrors] = useState<string>('');

    useEffect(() => {
        const controller = new AbortController();
        getGame(controller.signal).then(setGame).catch(setErrors);

        return () => controller.abort();
    }, [id]);

    const getGame = async (signal: AbortSignal) => {
        const response = await axios.get('/game', {
            baseURL: `https://${API_HOST}/api`,
            headers: {
                'X-RapidAPI-Key': API_KEY,
                'X-RapidAPI-Host': API_HOST,
            },
            signal,
            params: {
                id,
            },
        });
        return response.data;
    };
    return { game, errors };
};

export default useFetchGame;

import { createBrowserRouter } from 'react-router-dom';
import GameListContainer from './components/GameListContainer.tsx';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <GameListContainer />,
    },
    {
        path: '/games/:gameID',
        element: <h1>Game Details</h1>,
    },
]);

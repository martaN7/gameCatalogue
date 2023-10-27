import { createBrowserRouter } from 'react-router-dom';
import GameListContainer from './components/GameListContainer.tsx';
import GameDetails from './components/GameDetails.tsx';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <GameListContainer />,
    },
    {
        path: '/games/:gameID',
        element: <GameDetails />,
    },
]);

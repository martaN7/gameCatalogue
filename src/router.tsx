import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <h1>Home</h1>,
    },
    {
        path: '/games/:gameID',
        element: <h1>Game Details</h1>,
    },
]);

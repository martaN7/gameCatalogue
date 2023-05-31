import CssBaseline from '@mui/material/CssBaseline';
import { router } from './router.tsx';
import { RouterProvider } from 'react-router-dom';

function App() {
    return (
        <>
            <RouterProvider router={router} />
            <CssBaseline />
            <h1>Game Catalogue</h1>
        </>
    );
}

export default App;

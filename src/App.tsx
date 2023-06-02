import CssBaseline from '@mui/material/CssBaseline';
import { router } from './router.tsx';
import { RouterProvider } from 'react-router-dom';

function App() {
    return (
        <>
            <RouterProvider router={router} />
            <CssBaseline />
        </>
    );
}

export default App;

import * as reactRouter from 'react-router';
import useRoutes from './hooks/useRoutes';

function App() {
    const { routes } = useRoutes();
    const router = reactRouter.createBrowserRouter(routes);
    return <reactRouter.RouterProvider router={router} />;
}

export default App;

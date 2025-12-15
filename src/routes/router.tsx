import { createBrowserRouter } from 'react-router-dom';
import { PATH } from './constants/path';
import App from '../App';
import MainPage from '../pages/MainPage';
import DetailPage from '../pages/DetailPage';
import LoginPage from '../pages/LoginPage';
import SignupPage from '../pages/SignupPage';
import PrivateRoute from './PrivateRoute';
import MainLayout from '../layouts/MainLayout';
import AdminLayout from '../layouts/AdminLayout';
import AdminDashboard from '../pages/admin/AdminDashboard';
import AdminLoginPage from '../pages/admin/AdminLoginPage';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                element: <MainLayout />,
                children: [
                    {
                        path: PATH.HOME,
                        element: <MainPage />,
                    },
                    {
                        path: PATH.LOGIN,
                        element: <LoginPage />,
                    },
                    {
                        path: PATH.SIGNUP,
                        element: <SignupPage />,
                    },
                    {
                        path: PATH.ARTIFACT_DETAIL,
                        element: <DetailPage />,
                    },
                    {
                        path: PATH.WRITE,
                        element: (
                            <PrivateRoute>
                                <div>Write Page Content</div>
                            </PrivateRoute>
                        ),
                    },
                ],
            },
            {
                path: PATH.ADMIN_LOGIN,
                element: <AdminLoginPage />,
            },
            {
                path: PATH.ADMIN,
                element: <AdminLayout />,
                children: [
                    {
                        index: true,
                        element: <AdminDashboard />,
                    },
                ],
            },
        ],
    },
]);
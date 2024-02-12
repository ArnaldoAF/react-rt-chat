// import { Routes, Route } from 'react-router-dom'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useAuth } from "../provider/authProvider";

import { ProtectedRoute } from "./ProtectedRoute";
import { DefaultLayout } from '../layouts/DefaultLayout'

import { Home } from '../pages/Home'
import LogIn from '../pages/LogIn'
import SignUp from '../pages/SignUp'
import ChatList from "../pages/ChatList";

const routesForPublic = [
    {
        path: "/service",
        element: <div>Service Page</div>,
    },
    {
        path: "/about-us",
        element: <div>About Us</div>,
    },
];

const routesForAuthenticatedOnly = [
    {
        path: "/",
        element: <DefaultLayout />,
        children: [
            {
                path: "/",
                element: <ProtectedRoute />,
                children: [
                    {
                        path: "/",
                        element: <Home />,
                    },
                    {
                        path: "/chat-list",
                        element: <ChatList />,
                    },
                    {
                        path: "/profile",
                        element: <div>User Profile</div>,
                    },
                    {
                        path: "/logout",
                        element: <div>Logout</div>,
                    },
                ],
            },
        ]
    }
];

const routesForNotAuthenticatedOnly = [
    {
        path: "/",
        element: <DefaultLayout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/login",
                element: <LogIn />,
            },
            {
                path: "/sign-up",
                element: <SignUp />,
            },
        ]
    }
];


export default function Routes() {
    const { token } = useAuth();
    const router = createBrowserRouter([
        ...routesForPublic,
        ...(!token ? routesForNotAuthenticatedOnly : []),
        ...routesForAuthenticatedOnly,
    ]);

    return <RouterProvider router={router} />;
}

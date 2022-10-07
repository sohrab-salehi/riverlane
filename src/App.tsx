import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import MainLayout from "./MainLayout";
import ErrorPage from "./ErrorPage";
import Circuits from "./Circuits";
import Home from "./Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                element: <Home />,
                index: true,
            },
            {
                path: "circuits",
                element: <Circuits />,
            },
        ],
    },
]);

export function App(): JSX.Element {
    return <RouterProvider router={router} />;
}

export default App;

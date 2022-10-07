import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "antd/dist/antd.min.css";
import reportWebVitals from "./reportWebVitals";
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

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

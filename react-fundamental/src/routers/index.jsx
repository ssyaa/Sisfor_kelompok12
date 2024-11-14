import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";

import Homepage from "../pages/Index";
import About from "../pages/About";
import Post from "../pages/blogs/_id"
import Blog from "../pages/blogs";

import ErrorPage from "../components/ErrorPage";
import { posts, postById } from "../apis/loaders";

export const router = createBrowserRouter([
    {
       path: '/',
       element: <RootLayout />,
        errorElement: <ErrorPage />,
       children: [
            {
                path: '/',
                element: <Homepage />
            },
            {
                path: '/blog',
                element: <Blog />,
                loader: posts
            },
            {
                path: '/blog/:id',
                element: <Post />,
                loader: postById
            },
            {
                path: '/about',
                element: <About />
            }
       ]
    }
])
import React, { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { createHashRouter, RouterProvider, Outlet } from 'react-router-dom';

import Layout from './Layout.jsx'
import Loading from './components/Loading.jsx'

const About = lazy(() => import('./components/About.jsx'));
const Art = lazy(() => import('./components/Art.jsx'));
const NotFound = lazy(() => import('./components/NotFound.jsx'));
const TermsOfUse = lazy(() => import('./components/TermsOfUse.jsx'));

const router = createHashRouter([
    {
        element: (
            <Layout>
                <Suspense fallback={<Loading></Loading>}>
                    <Outlet></Outlet>
                </Suspense>
            </Layout>
        ),
        children: [
            {
                path: "EverydayIsArt",
                element: (
                    <About></About>
                )
            },
            {
                path: "/",
                element: (
                    <About></About>
                )
            },
            {
                path: "random/:org",
                element: (
                    <Art></Art>
                )
            },
            {
                path: "random/:org",
                element: (
                    <Art></Art>
                )
            },
            {
                path: 'termsofuse',
                element: (
                    <TermsOfUse></TermsOfUse>
                )
            },
            {
                path: 'about',
                element: (
                    <About></About>
                )
            },
            {
                path: '*',
                element: (
                    <NotFound />
                )
            }
        ]
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)
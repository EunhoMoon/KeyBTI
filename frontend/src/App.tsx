import React, {FC} from 'react';
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import RootLayout from "./page/RootLayout";
import HomePage from "./page/HomePage";
import TestPage from "./page/TestPage";
import ResultPage from "./page/ResultPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout/>,
        children: [
            {index: true, element: <HomePage/>},
            {path: 'test', element: <TestPage/>},
            {path: 'result', element: <ResultPage/>}
        ]
    }
]);

const App:FC = () => {
  return <RouterProvider router={router}/>;
}

export default App;

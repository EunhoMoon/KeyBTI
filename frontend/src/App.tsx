import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from "./page/MainLayout";
import HomePage from "./page/HomePage";
import TestPage from "./page/TestPage";
import ResultPage from "./page/ResultPage";

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout/>,
    children: [
      {index: true, element: <HomePage/>},
      {path: 'test', element: <TestPage/>},
      {path: 'result', element: <ResultPage/>}
    ]
  }
]);

function App() {
  return (
      <RouterProvider router={router}/>
  );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import CreateList from './components/CreateToWatch';
import MyMovies from './components/ShowToWatch';
import ShowOne from './components/detailsPg';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/create",
    element: <CreateList/>,
  },
  {
    path: "/mylist",
    element: <MyMovies/>,
  },
  {
    path: "/movie/:id",
    element: <ShowOne/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
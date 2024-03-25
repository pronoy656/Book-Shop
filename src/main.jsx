import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Componenet/Root/Root";
import ErrorPage from "./Componenet/ErrorPage/ErrorPage";
import Home from "./Componenet/Home/Home";
import ListedBooks from "./Componenet/ListedBooks/ListedBooks";
import PageToRead from "./Componenet/PageToRead/PageToRead";
import Contact from "./Componenet/Contact/Contact";
import Srvices from "./Componenet/Services/Srvices";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/listedBooks",
        element: <ListedBooks></ListedBooks>,
      },
      {
        path: "/pagesToRead",
        element: <PageToRead></PageToRead>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/services",
        element: <Srvices></Srvices>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

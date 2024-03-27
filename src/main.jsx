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
import BookDetails from "./Componenet/BookDetails/BookDetails";
import ReadBooks from "./Componenet/ReadBooks/ReadBooks";
import WishList from "./Componenet/WishList/WishList";

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
        loader: () =>
          fetch("https://pronoy656.github.io/assignment-9-json/books.json"),
        children: [
          {
            index: true,
            element: <ReadBooks></ReadBooks>,
          },
          {
            path: "wishlist",
            element: <WishList></WishList>,
          },
        ],
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
      {
        path: "/bookDetails/:id",
        element: <BookDetails></BookDetails>,
        loader: () =>
          fetch("https://pronoy656.github.io/assignment-9-json/books.json"),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

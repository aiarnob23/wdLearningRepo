import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'
import Home from './Pages/Home';
import ToDoProvider from './Context/ToDoProvider';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ToDoProvider>
      <RouterProvider router={router} />
    </ToDoProvider>
  </React.StrictMode>
);

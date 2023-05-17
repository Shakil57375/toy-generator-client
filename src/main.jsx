import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import router from "./Routes/Router.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="max-w-7xl mt-3 mx-auto">
    <React.StrictMode>
      <RouterProvider router={router}></RouterProvider>
    </React.StrictMode>
  </div>
);

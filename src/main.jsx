import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  RouterProvider,
} from "react-router-dom";
import './index.css'
import router from "./Routes/Routes";
import AuthProvider from "./Provider/AuthProvider";




ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="mx-3">
    <AuthProvider>
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </AuthProvider>

  </div>

);

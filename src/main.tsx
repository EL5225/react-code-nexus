import React from "react";
import ReactDOM from "react-dom/client";
import router from "./routers";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import { MainLayout } from "@/layouts";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <MainLayout>
      <RouterProvider router={router} />
    </MainLayout>
  </React.StrictMode>,
);

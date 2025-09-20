import { createRoot } from "react-dom/client";
import "./index.css";
import { router } from "./router/Routes";
import { RouterProvider } from "react-router-dom";
// import { ConfigProvider } from "antd"; 

createRoot(document.getElementById("root")).render(
      <RouterProvider router={router} />
);

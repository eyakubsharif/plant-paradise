import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Layout/Root";
import Home from "./Pages/Home/Home";
import Plants from "./Pages/Plants/Plants";
import MyPlants from "./Pages/MyPlants/MyPlants";
import Dashboard from "./Pages/Dashboard/Dashboard";
import PlantDetails from "./Pages/PlantDetails/PlantDetails";
import PlantProvider from "./Context/PlantProvider";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, loader: () => fetch("/data.json"), element: <Home /> },
      { path: "plants", loader: () => fetch("/data.json"), element: <Plants /> },
      { path: "myPlants",
        loader:()=>fetch('/data.json'),
        element: <MyPlants /> },
      { path: "dashboard", element: <Dashboard /> },
      {
        path: "/plantDetails/:plantId",
        loader: () => fetch("/data.json"),
        element: <PlantDetails />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PlantProvider>
      <RouterProvider router={router} />
    </PlantProvider>
  </StrictMode>,
);

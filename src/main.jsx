import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from "./Layout/Root";
import Home from "./Pages/Home/Home";
import Plants from "./Pages/Plants/Plants";
import MyPlants from "./Pages/MyPlants/MyPlants";
import Dashboard from "./Pages/Dashboard/Dashboard";
import PlantDetails from "./Pages/PlantDetails/PlantDetails";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, loader: () => fetch("data.json"), Component: Home },
      { path: "plants", loader: () => fetch("data.json"), Component: Plants },
      { path: "myPlants", Component: MyPlants },
      { path: "dashboard", Component: Dashboard },
      {path:"/plantDetails/:plantId",
        loader:()=>fetch('data.json'),
        Component:PlantDetails}
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);

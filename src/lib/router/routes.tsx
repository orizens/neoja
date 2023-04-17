import type { PathRouteProps } from "react-router-dom";

import Home from "lib/pages/home";
import Categories from "lib/pages/home/components/Categories";

export const routes: Array<PathRouteProps> = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/categories",
    element: <Categories />,
  },
];

export const privateRoutes: Array<PathRouteProps> = [];

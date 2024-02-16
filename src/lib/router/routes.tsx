import { createBrowserRouter, PathRouteProps } from "react-router-dom";

import Home from "lib/pages/home";
import Rating from "lib/pages/rating";
import Categories from "lib/pages/home/components/Categories";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/categories",
    loader: async () => {
      const response = await fetch('/videos.json');
      return await response.json();
    },
    element: <Categories />,
  },
  {
    path: '/rating',
    element: <Rating />
  }
]);
export const privateRoutes: Array<PathRouteProps> = [];

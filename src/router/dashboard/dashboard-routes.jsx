import Dashboard from "../../views/dashboard/Dashboard";
import Home from "../../views/dashboard/home/Home";

const dashboardRoutes = {
  path: "/dashboard",
  element: <Dashboard />,
  children: [
    {
      path: "/dashboard",
      element: <Home />,
    },
    {
      path: "/dashboard/product",
      element: <Product />,
    },
  ],
};

export default dashboardRoutes;

import { createBrowserRouter } from "react-router";

import AuthLayuout from "@/components/AuthLayout";
import Login from "@/views/Login";
import Reg from "@/views/Reg";
import Root from "@/views/Root";

const router = createBrowserRouter([
  {
    path: "/login",
    element: (
      <AuthLayuout>
        <Login />
      </AuthLayuout>
    ),
  },
  {
    path: "/reg",
    element: (
      <AuthLayuout>
        <Reg />
      </AuthLayuout>
    ),
  },
  {
    path: "/",
    element: <Root />,
  },
]);

export default router;

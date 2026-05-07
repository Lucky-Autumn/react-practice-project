import { createBrowserRouter } from "react-router";

import AuthLayuout from "@/components/AuthLayout";
import Login from "@/views/Login";
import Reg from "@/views/Reg";
import Root from "@/views/Root";
import { action as regAction } from "@/views/Reg/index.action";

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
    action: regAction,
  },
  {
    path: "/",
    element: <Root />,
  },
]);

export default router;

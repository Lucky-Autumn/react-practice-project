import { regApi } from "@/api/auth";

import { message } from "antd";
import to from "await-to-js";
import { redirect } from "react-router";

export const action = async ({ request }: { request: Request }) => {
  const formData = await request.formData();

  const [err] = await to(regApi(formData));
  if (err) {
    return null;
  }
  message.success("注册成功，请登录");
  return redirect("/login?username=" + formData.get("username"));
};

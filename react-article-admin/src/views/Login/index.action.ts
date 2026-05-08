import { loginApi } from "@/api/auth";
import { useAppStore } from "@/store/appStore";
import to from "await-to-js";
import { redirect } from "react-router";
import type { ActionFunctionArgs } from "react-router";

export const action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const [err, response] = await to(loginApi(formData));
  if (err) {
    return null;
  }

  useAppStore.getState().setToken(response.token);
  return redirect("/"); // 登录成功后跳转到后台首页
};

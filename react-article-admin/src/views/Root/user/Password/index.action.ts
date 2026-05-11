import { updatePwdApi } from "@/api/user";
import { useAppStore } from "@/store/appStore";
import { message } from "antd";
import to from "await-to-js";
import type { ActionFunctionArgs } from "react-router";

export const action = async ({ request }: ActionFunctionArgs) => {
  const fd = await request.formData();
  const [err] = await to(updatePwdApi(fd));

  if (err) return null;

  message.success("密码修改成功！");
  useAppStore.getState().logout();
  return {
    result: "success",
  };
};

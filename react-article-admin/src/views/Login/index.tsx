import React from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import { Link, useFetcher, useSearchParams } from "react-router";
import type { LoginFormValues } from "@/types/auth";

const Login: React.FC = () => {
  const [searchParams] = useSearchParams();
  const fetcher = useFetcher();
  const onFinish = (values: LoginFormValues) => {
    fetcher.submit(values, { method: "post", action: "/login" });
  };

  return (
    <Form
      initialValues={{ username: searchParams.get("username") || "" }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[
          { required: true, message: "请输入用户名!" },
          {
            pattern: /^\w{5,15}$/,
            message: "用户名必须在5-15个字符之间，且包含字母、数字和下划线!",
          },
        ]}
      >
        <Input prefix={<UserOutlined />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          { required: true, message: "请输入密码!" },
          {
            pattern: /^[a-zA-Z\d]{5,15}$/,
            message: "密码必须在5-15个字符之间，且包含字母、数字!",
          },
        ]}
      >
        <Input
          prefix={<LockOutlined />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>

      <Form.Item>
        <Button
          type="primary"
          loading={fetcher.state !== "idle" && { delay: 200 }}
          htmlType="submit"
        >
          登 录
        </Button>
        或者 <Link to="/reg">立即注册!</Link>
      </Form.Item>
    </Form>
  );
};

export default Login;

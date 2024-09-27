"use client";
import IconCheckbox from "@/assets/icons/icon-checkbox";
import Button from "@/components/ui/button";
import Logo from "@/components/ui/logo/Logo";
import { BaseColor } from "@/utils/common";
import { Form, Input } from "antd";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Signup = () => {
  const router = useRouter();
  const [checkbok, setCheckBox] = useState(false);
  const validateMessages = {
    required: "${label} is required!",
    types: {
      email: "Email is not a valid email!",
    },
  };

  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  const [form] = Form.useForm();

  return (
    <div className="flex h-full items-center w-full justify-center">
      <div
        style={{
          backgroundColor: BaseColor.primary,
          height: "fit-content",
          maxWidth: "400px",
          width: "95%",
          borderRadius: "10px",
          border: `1px solid ${BaseColor.primary2}`,
          padding: "40px 60px 40px 60px",
        }}
      >
        <div className="flex w-full justify-center">
          <Logo />
        </div>
        <div>
          <Form
            style={{ display: "flex", flexDirection: "column" }}
            name="basic"
            form={form}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            layout="vertical"
            requiredMark={"optional"}
            validateMessages={validateMessages}
            className="form-custom-type-1"
          >
            <Form.Item layout="vertical" name="email">
              <Input
                placeholder="Email"
                style={{
                  height: "46px",
                  alignItems: "center",
                  backgroundColor: BaseColor.primary2,
                  position: "relative",
                }}
                autoComplete="false"
              />
            </Form.Item>
            <Form.Item layout="vertical" name="password">
              <Input.Password
                placeholder="Password"
                style={{
                  height: "46px",
                  borderRadius: "8px",
                  alignItems: "center",
                  backgroundColor: BaseColor.primary2,
                  position: "relative",
                }}
                autoComplete="false"
              />
            </Form.Item>
            <Form.Item layout="vertical" name="password">
              <Input.Password
                placeholder="Password"
                style={{
                  height: "46px",
                  borderRadius: "8px",
                  alignItems: "center",
                  backgroundColor: BaseColor.primary2,
                  position: "relative",
                }}
                autoComplete="false"
              />
            </Form.Item>
            <div className="flex flex-row gap-2 justify-start items-center mb-4">
              <div
                className="w-6 h-6 rounded-md cursor-pointer flex items-center justify-center"
                style={{ backgroundColor: BaseColor.primary2 }}
                onClick={() => setCheckBox(!checkbok)}
              >
                {checkbok ? <IconCheckbox /> : null}
              </div>
              <p className="text-white">
                I agree to the{" "}
                <span className="text-secondary cursor-pointer hover:underline">
                  Privacy Policy
                </span>
              </p>
            </div>
            <Button type={"submit"} title={<>SIGN UP</>} />
          </Form>
        </div>
        <p className="w-full text-sm text-center mt-[10px]">
          Already have an account?{" "}
          <span
            className="text-secondary cursor-pointer hover:underline"
            onClick={() => {
              router.push("/signin");
            }}
          >
            Sign in!
          </span>
        </p>
      </div>
    </div>
  );
};

export default Signup;

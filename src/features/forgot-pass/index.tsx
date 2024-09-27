"use client";
import Button from "@/components/ui/button";
import Logo from "@/components/ui/logo/Logo";
import { BaseColor } from "@/utils/common";
import { Checkbox, Form, Input } from "antd";

const ForgotPass = () => {
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
            <Form.Item>
              <div className="flex flex-row gap-2 justify-start">
                <Checkbox onChange={() => {}}></Checkbox>
                <p className="text-white">
                  I agree to the{" "}
                  <span className="text-secondary cursor-pointer hover:underline">
                    Privacy Policy
                  </span>
                </p>
              </div>
            </Form.Item>
            <Button type={"submit"} title={<>SEND</>} />
          </Form>
        </div>
        <p className="w-full text-sm text-center mt-[10px]">
          We will send a password to your Email
        </p>
      </div>
    </div>
  );
};

export default ForgotPass;

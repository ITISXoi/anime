import Button from "@/components/ui/button";
import { BaseColor } from "@/utils/common";
import { Form, Input } from "antd";

const ChangePassword = () => {
  const [form] = Form.useForm();
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  const validateMessages = {
    required: "${label} is required!",
    types: {
      email: "Email is not a valid email!",
    },
  };
  return (
    <div
      className="flex flex-col w-full p-[30px] rounded-lg"
      style={{ border: `1px solid ${BaseColor.primary2}` }}
    >
      <p className="text-xl">Change password</p>
      <Form
        name="basic"
        form={form}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        layout="vertical"
        requiredMark={true}
        validateMessages={validateMessages}
        className="form-custom-change-pass"
      >
        <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row w-full gap-4 lg:gap-0 xl:gap-4">
          <Form.Item layout="vertical" name="oldPass" label="Old password">
            <Input.Password
              placeholder="Old password"
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
          <div className="w-[50%]"></div>
        </div>
        <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row w-full gap-4 lg:gap-0 xl:gap-4">
          <Form.Item layout="vertical" name="newPass" label="New password">
            <Input.Password
              placeholder="New password"
              style={{
                borderRadius: "8px",
                height: "46px",
                alignItems: "center",
                backgroundColor: BaseColor.primary2,
                position: "relative",
              }}
              autoComplete="false"
            />
          </Form.Item>
          <Form.Item
            layout="vertical"
            name="comfirmPass"
            label="Confirm password"
          >
            <Input.Password
              placeholder="Confirm password"
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
        </div>
        <Button
          type={"submit"}
          title={<>CHANGE</>}
          className="w-[150px] mt-4"
        />
      </Form>
    </div>
  );
};

export default ChangePassword;

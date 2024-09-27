import Button from "@/components/ui/button";
import { BaseColor } from "@/utils/common";
import { Form, Input } from "antd";
import TextArea from "antd/es/input/TextArea";

const ContactForm = () => {
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
    <div className="flex flex-col w-full xl:w-[66%]">
      <p className="text-[36px] mb-[10px]">Contact Form</p>
      <div
        className="flex flex-col w-full p-[30px] rounded-lg"
        style={{ border: `1px solid ${BaseColor.primary2}` }}
      >
        <Form
          name="basic"
          form={form}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          layout="vertical"
          requiredMark={true}
          validateMessages={validateMessages}
          className="form-contact"
        >
          <div className="flex flex-col xl:flex-row w-full gap-0 xl:gap-4">
            <div className="w-full xl:w-[50%]">
              <Form.Item layout="vertical" name="name" label="Name">
                <Input
                  placeholder="Name"
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
            </div>
            <div className="w-full xl:w-[50%]">
              <Form.Item layout="vertical" name="email" label="Email">
                <Input
                  placeholder="Email"
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
          </div>
          <div className="w-full">
            <Form.Item layout="vertical" name="subject" label="Subject">
              <Input
                className="w-[100%]"
                placeholder="Partnership"
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
          <div className="w-full">
            <Form.Item layout="vertical" name="message" label="Message">
              <TextArea
                placeholder="Type your message..."
                autoSize={{ minRows: 6, maxRows: 6 }}
              />
            </Form.Item>
          </div>
          <Button
            type={"submit"}
            title={<>SEND</>}
            className="w-[150px] mt-4"
          />
        </Form>
      </div>
    </div>
  );
};

export default ContactForm;

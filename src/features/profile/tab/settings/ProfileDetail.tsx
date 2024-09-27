import Button from "@/components/ui/button";
import { BaseColor } from "@/utils/common";
import { PictureOutlined } from "@ant-design/icons";
import { Form, Input, message, Upload, UploadProps } from "antd";

const ProfileDetail = () => {
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

  const props: UploadProps = {
    name: "file",
    action: "https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",
    headers: {
      authorization: "authorization-text",
    },
    onChange(info) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    progress: {
      strokeColor: {
        "0%": "#108ee9",
        "100%": "#87d068",
      },
      strokeWidth: 3,
      format: (percent) => percent && `${parseFloat(percent.toFixed(2))}%`,
    },
  };
  return (
    <div
      className="flex flex-col w-full p-[30px] rounded-lg"
      style={{ border: `1px solid ${BaseColor.primary2}` }}
    >
      <p className="text-xl">Profile details</p>
      <Form
        name="basic"
        form={form}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        layout="vertical"
        requiredMark={true}
        validateMessages={validateMessages}
        className="form-custom-profile"
      >
        <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row w-full gap-4 lg:gap-0 xl:gap-4">
          <Form.Item layout="vertical" name="useName" label="User name">
            <Input
              placeholder="Username"
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
        <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row w-full gap-4 lg:gap-0 xl:gap-4">
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
          <Form.Item layout="vertical" label="Avatar">
            <Upload {...props} className="w-full h-[46px]">
              <div className="w-full h-full flex flex-row justify-between bg-primary-2 py-[13px] hover:py-[11px] px-5 hover:px-[18px] cursor-pointer rounded-md border-upload">
                <p className="text-white text-sm">{"Upload (40x40)"}</p>
                <PictureOutlined
                  style={{ fontSize: 16, color: BaseColor.white }}
                />
              </div>
            </Upload>
          </Form.Item>
        </div>
        <Button type={"submit"} title={<>SAVE</>} className="w-[150px] mt-4" />
      </Form>
    </div>
  );
};

export default ProfileDetail;

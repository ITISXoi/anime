import ChangePassword from "./ChangePassWord";
import ProfileDetail from "./ProfileDetail";

const Setting = () => {
  return (
    <div className="container mt-10">
      <div className="flex flex-col lg:flex-row gap-8">
        <ProfileDetail />
        <ChangePassword />
      </div>
    </div>
  );
};

export default Setting;

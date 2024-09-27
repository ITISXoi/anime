import {
  HistoryOutlined,
  LikeOutlined,
  LogoutOutlined,
  SettingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Avatar, Dropdown, MenuProps, Space } from "antd";

export const MenuAvatar = [
  {
    path: "/profile",
    title: "Profile",
    icon: <UserOutlined />,
  },
  {
    path: "/history",
    title: "History",
    icon: <HistoryOutlined />,
  },
  {
    path: "/favorites",
    title: "Favorites",
    icon: <LikeOutlined />,
  },
  {
    path: "/setting",
    title: "Setting",
    icon: <SettingOutlined />,
  },
  {
    path: "/signin",
    title: "Logout",
    icon: <LogoutOutlined />,
  },
];

const AvatarComponent = () => {
  const items: MenuProps["items"] = MenuAvatar.map(
    (item: { path: string; title: string; icon: JSX.Element }) => {
      return {
        label: (
          <a href={item.path} className="">
            <div className="flex flex-row items-center gap-2 cursor-pointer min-w-[130px]">
              {item.icon}
              <p className="text-[14px]">{item.title.toUpperCase()}</p>
            </div>
          </a>
        ),
        key: item.title,
      };
    }
  );
  return (
    <Dropdown
      menu={{ items }}
      trigger={["click"]}
      className="cursor-pointer header__nav-link"
    >
      <Space className="flex content-center justify-center justify-items-center">
        <Avatar
          className="cursor-pointer avatar-custom"
          aria-controls="basic-menu"
          aria-haspopup="true"
          aria-expanded="true"
          alt=""
          src="/images/logo.svg"
        />
      </Space>
    </Dropdown>
  );
};

export default AvatarComponent;

import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { MenuProps } from "antd";
import { Dropdown, Space } from "antd";

const MenuItem = ({ value }: any) => {
  if (value?.children) {
    const items: MenuProps["items"] = value?.children.map((i: any) => {
      return {
        label: (
          <a href={i.path} className="cursor-pointer mr-10">
            {i.label}
          </a>
        ),
        key: i.key,
      };
    });
    return (
      <Dropdown
        menu={{ items }}
        trigger={["click"]}
        className="mr-2 cursor-pointer header__nav-link"
      >
        <Space className="flex content-center justify-center justify-items-center">
          <span>{value?.title}</span>
          <FontAwesomeIcon icon={faChevronDown} className="font-size-10" />
        </Space>
      </Dropdown>
    );
  }
  return (
    <a href={value?.path} className="cursor-pointer mr-10 header__nav-link">
      {value?.title}
    </a>
  );
};

export default MenuItem;

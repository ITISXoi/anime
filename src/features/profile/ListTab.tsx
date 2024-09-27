"use client";
import Button from "@/components/ui/button";
import { BaseColor } from "@/utils/common";
import { LogoutOutlined, UserOutlined } from "@ant-design/icons";
import { Dispatch, SetStateAction } from "react";

interface Props {
  items: {
    key: string;
    title: string;
    children: JSX.Element;
  }[];
  tabSelect: string;
  setTabSelect: Dispatch<SetStateAction<string>>;
  handleChangeTab: (_item: string) => void;
}

const ListTab = (props: Props) => {
  const { items, tabSelect, handleChangeTab } = props;

  const handleLogout = () => {};
  const handleClick = () => {};

  return (
    <div
      className="mt-6 lg:mt-0"
      style={{
        borderBottom: `1px solid ${BaseColor.primary2}`,
      }}
    >
      <div className="container flex flex-col gap-6 md:flex-row items-center justify-between">
        <div className="flex flex-col w-full lg:w-fit lg:flex-row lg:gap-16 items-start lg:items-center">
          <div className="flex flex-row w-full justify-between">
            <div className="flex flex-row gap-6">
              <div className="flex items-center justify-center bg-primary-2 px-3 py-2.5 rounded-md">
                <UserOutlined style={{ fontSize: 20 }} />
              </div>
              <div className="flex flex-col justify-between">
                <p>John Doe</p>
                <p className="text-sm text-gray-light">ANISAGE ID: 1303</p>
              </div>
            </div>
            <div className="block lg:hidden">
              <Button
                className="w-[50px]"
                title={<LogoutOutlined />}
                type={"button"}
                onClick={handleLogout}
              />
            </div>
          </div>

          <div className="flex flex-row flex-wrap lg:flex-nowrap mt-4 lg:mt-0">
            {items.map((item) => (
              <div
                key={item.key}
                className="pt-4 pb-4 mr-10 lg:pt-8 lg:pb-8 border-b-2 cursor-pointer transition"
                style={{
                  color:
                    tabSelect === item.key
                      ? BaseColor.secondary
                      : BaseColor.white,
                  borderColor:
                    tabSelect === item.key
                      ? BaseColor.secondary
                      : "transparent",
                }}
                onClick={() => handleChangeTab(item.key)}
              >
                <p className="text-sm">{item.title.toUpperCase()}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="hidden lg:block ">
          <div className="flex items-center">
            <Button
              onClick={handleClick}
              className="w-[120px]"
              height="40px"
              title={<>Logout</>}
              type="button"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListTab;

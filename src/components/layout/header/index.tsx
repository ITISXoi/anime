"use client";
import Button from "@/components/ui/button";
import Logo from "@/components/ui/logo/Logo";
import { useAppDispatch } from "@/libs/hooks";
import { getToggleSideBar, setToggleSideBar } from "@/store/ducks/header/slice";
import { BaseColor } from "@/utils/common";
import {
  CloseOutlined,
  SearchOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";
import { Input } from "antd";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useSelector } from "react-redux";
import SideBarRight from "../sidebar";
import DropDownSearch from "../sidebar/DropDownSearch";
import HeaderComponent from "./ListMenuHeader";

const Header = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const toggleSideBar = useSelector(getToggleSideBar);
  const [dropDownSearch, setDropDownSearch] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>("");

  const handleClickSearch = () => {
    router.replace(`/catalog?keyword=${searchValue}`);
  };

  const handleChangeSearch = (value: string) => {
    setSearchValue(value);
  };

  const handleKeyDown = (e: any) => {
    if (e.key === "Enter") {
      handleClickSearch();
    }
  };

  const handleSignIn = () => {
    router.push(`/signin`);
  };

  return (
    <div className="header relative">
      <div className="container">
        <div className="header_content">
          <div className="flex flex-row items-center gap-[100px]">
            <Logo />
            <HeaderComponent />
          </div>
          <div className="flex flex-row gap-10 items-center">
            <div className="hidden lg:block">
              <Input
                className="header__search-input max-w-[300px]"
                placeholder="Search..."
                onKeyDown={handleKeyDown}
                onChange={(e) => handleChangeSearch(e.target.value)}
                suffix={
                  <SearchOutlined
                    className="search"
                    onClick={handleClickSearch}
                  />
                }
              />
            </div>
            <div className="block lg:hidden">
              <SearchOutlined
                className="search"
                onClick={() => setDropDownSearch(true)}
              />
            </div>
            {/* <MenuTranslate /> */}
            {/* <AvatarComponent /> */}
            <div className="hidden lg:block">
              <Button
                onClick={handleSignIn}
                className="w-[120px]"
                height="40px"
                title={<>SIGN IN</>}
                type="button"
              />
            </div>
            <div className="block lg:hidden">
              {toggleSideBar ? (
                <CloseOutlined
                  onClick={() => dispatch(setToggleSideBar(false))}
                  style={{
                    color: BaseColor.secondary,
                    fontSize: 25,
                    cursor: "pointer",
                  }}
                />
              ) : (
                <UnorderedListOutlined
                  onClick={() => dispatch(setToggleSideBar(true))}
                  style={{ fontSize: 25, cursor: "pointer" }}
                />
              )}
            </div>
          </div>
        </div>
      </div>
      <SideBarRight toggleSideBar={toggleSideBar} />
      <DropDownSearch
        dropDownSearch={dropDownSearch}
        setDropDownSearch={setDropDownSearch}
      />
    </div>
  );
};

export default Header;

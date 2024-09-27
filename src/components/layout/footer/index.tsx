/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";
import Logo from "@/components/ui/logo/Logo";
import { BaseColor } from "@/utils/common";
import { smoothscroll } from "@/utils/funtions";
import { MenuFooter } from "@/utils/menu";
import { ArrowUpOutlined } from "@ant-design/icons";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container flex items-center h-full">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10 h-full w-full">
          <div className="flex flex-row gap-6 items-center">
            <Logo />
            <div className="hidden_header">
              <div className="flex flex-col">
                <p className="text-[10px]">© AniSage, 2022</p>
                <p className="text-[10px]">Free Anime Stream!</p>
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-6 lg:gap-12 items-center">
            {MenuFooter.map((item: { path: string; title: string }) => (
              <a
                key={item.title}
                href={item.path}
                className={`text-sm hover:text-[${BaseColor.secondary}]`}
              >
                {item.title}
              </a>
            ))}
            <div className="hidden lg:block">
              <div
                className="pr-[10px] pl-[10px] pt-[5px] pb-[5px] border-2 rounded-lg cursor-pointer"
                style={{ borderColor: BaseColor.secondary }}
                onClick={() => smoothscroll()}
              >
                <ArrowUpOutlined className="arrow-up" />
              </div>
            </div>
          </div>
          <div className="block lg:hidden w-full">
            <div className="flex flex-row justify-between w-full">
              <div className="flex flex-col">
                <p className="text-[10px]">© AniSage, 2022</p>
                <p className="text-[10px]">Free Anime Stream!</p>
              </div>
              <div
                className="pr-[10px] pl-[10px] pt-[5px] pb-[5px] border-2 rounded-lg cursor-pointer"
                style={{ borderColor: BaseColor.secondary }}
                onClick={() => smoothscroll()}
              >
                <ArrowUpOutlined className="arrow-up" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

import { cn } from "@/config/helper";
import { BaseColor } from "@/utils/common";
import { CloseOutlined, SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction, useState } from "react";

const DropDownSearch = ({
  dropDownSearch,
  setDropDownSearch,
}: {
  dropDownSearch: boolean;
  setDropDownSearch: Dispatch<SetStateAction<boolean>>;
}) => {
  const router = useRouter();
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
  return (
    <div
      className={cn(
        {
          "h-[70px]": dropDownSearch,
          "h-0": !dropDownSearch,
        },
        "block lg:hidden absolute bg-[#1a191f] top-0 z-[99] w-full border-t transition-all duration-300 ease-in-out"
      )}
      style={{ borderColor: BaseColor.secondary }}
    >
      <div
        className={cn(
          {
            block: dropDownSearch,
            hidden: !dropDownSearch,
          },
          "container ease-in-out h-full"
        )}
      >
        <div className="flex flex-row justify-center items-center gap-4 h-full">
          <Input
            className="header__search-input"
            placeholder="Search..."
            onKeyDown={handleKeyDown}
            onChange={(e) => handleChangeSearch(e.target.value)}
            suffix={
              <SearchOutlined className="search" onClick={handleClickSearch} />
            }
          />
          <CloseOutlined
            onClick={() => setDropDownSearch(false)}
            className="arrow-up"
            style={{ fontSize: 16, cursor: "pointer" }}
          />
        </div>
      </div>
    </div>
  );
};

export default DropDownSearch;

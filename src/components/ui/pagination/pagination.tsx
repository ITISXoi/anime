"use client";
import { cn } from "@/config/helper";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import * as RCPagination from "rc-pagination";

interface Props {
  totalItem: number;
  numberPage: number;
  setNumberPage: (_value: number) => void;
  setLimitPage: (_value: number) => void;
  minIndexItemInPage: number;
  maxIndexItemInPage: number;
  totalPage: number;
  limit: number;
  isSetLimit?: boolean;
}

const Pagination = (props: Props) => {
  const {
    totalItem,
    totalPage,
    minIndexItemInPage,
    maxIndexItemInPage,
    numberPage,
    setNumberPage,
    limit,
    isSetLimit,
  } = props;

  const renderItem = (page: number, type: string, element: React.ReactNode) => {
    switch (type) {
      case "page":
        return (
          <div
            onClick={() => {
              if (setNumberPage) {
                setNumberPage(page);
              }
            }}
            className={cn(
              {
                "border-page": page === numberPage,
              },
              "text-lg font-medium cursor-pointer px-4 py-[6px] rounded-lg mx-1 bg-primary-2 ml-2 mr-2"
            )}
          >
            {page}
          </div>
        );
      case "prev":
        return (
          <div
            className="flex cursor-pointer mr-2 rounded-lg bg-primary-2 px-[13px] py-[12px]"
            onClick={() => {
              if (numberPage - 1 > 0 && setNumberPage) {
                setNumberPage(numberPage - 1);
              }
            }}
          >
            <LeftOutlined />
          </div>
        );
      case "next":
        return (
          <div
            className="flex cursor-pointer ml-2 rounded-lg bg-primary-2 px-[13px] py-[12px]"
            onClick={() => {
              if (numberPage + 1 <= totalPage && setNumberPage) {
                setNumberPage(numberPage + 1);
              }
            }}
          >
            <RightOutlined />
          </div>
        );
      case "jump-next":
        return (
          <div
            className="flex cursor-pointer mx-2 rounded-lg bg-primary-2 px-[15px] py-[8px]"
            onClick={() => {
              if (numberPage + 3 >= totalPage) {
                return setNumberPage(totalPage);
              }
              return setNumberPage(numberPage + 3);
            }}
          >
            <p>...</p>
          </div>
        );
      case "jump-prev":
        return (
          <div
            className="flex cursor-pointer mx-2 rounded-lg bg-primary-2 px-[15px] py-[8px]"
            onClick={() => {
              if (numberPage - 3 <= 1) {
                return setNumberPage(1);
              }
              return setNumberPage(numberPage - 3);
            }}
          >
            <p>...</p>
          </div>
        );
      default:
        return element;
    }
  };

  return (
    <div
      className={cn(
        "flex flex-col gap-5 items-center justify-between sm:flex-row",
        {
          "justify-between": isSetLimit,
          "justify-end": !isSetLimit,
        }
      )}
    >
      {isSetLimit && (
        <div className="flex flex-row gap-2 items-center">
          <p className="text-base font-medium">Items per page</p>
          <p className="text-base font-medium">
            {totalItem > 0 ? minIndexItemInPage : 0} -{" "}
            {maxIndexItemInPage < totalItem ? maxIndexItemInPage : totalItem} of{" "}
            {totalItem}
          </p>
        </div>
      )}
      <div className="flex flex-row items-center">
        <RCPagination.default
          className="flex flex-row items-center"
          showLessItems
          showTitle={false}
          itemRender={renderItem}
          current={numberPage}
          total={totalItem}
          pageSize={limit}
        />
      </div>
    </div>
  );
};

export default Pagination;

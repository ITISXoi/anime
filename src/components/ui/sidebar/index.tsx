import { cn } from "@/config/helper";
import { BaseColor } from "@/utils/common";

const SideBar = ({
  toggleSideBar,
  children,
}: {
  toggleSideBar: boolean;
  children: JSX.Element;
}) => {
  return (
    <div
      className={cn(
        {
          "w-[14rem] xs:w-[18rem]": toggleSideBar,
          "w-0": !toggleSideBar,
        },
        "block lg:hidden fixed bg-[#1a191f] left-0 bottom-0 top-[71px] z-[99] border-t transition-all duration-300 ease-linear"
      )}
      style={{
        borderColor: BaseColor.secondary,
        height: "calc(100vh-70px)",
      }}
    >
      <div className="flex flex-col justify-between h-full mx-4 my-8 sm:m-8 pb-16">
        {children}
      </div>
    </div>
  );
};

export default SideBar;

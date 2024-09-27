import { cn } from "@/config/helper";
import HeaderMobileComponent from "../header/ListMenuHeaderMobile";
import { BaseColor } from "@/utils/common";
import Button from "@/components/ui/button";
import { useRouter } from "next/navigation";

const SideBarRight = ({ toggleSideBar }: { toggleSideBar: boolean }) => {
  const router = useRouter();
  return (
    <div
      className={cn(
        {
          "w-[15rem] xs:w-[19rem]": toggleSideBar,
          "w-0": !toggleSideBar,
        },
        "block lg:hidden absolute bg-[#1a191f] right-0 bottom-0 top-[71px] z-[99] border-t transition-all duration-300 ease-linear"
      )}
      style={{
        borderColor: BaseColor.secondary,
        height: "calc(100vh - 70px)",
      }}
    >
      <div className="flex flex-col justify-between h-full m-8 pb-16">
        <HeaderMobileComponent />
        <Button
          onClick={() => router.push(`/signin`)}
          className="w-[120px]"
          height="40px"
          title={<>SIGN IN</>}
          type="button"
        />
      </div>
    </div>
  );
};

export default SideBarRight;

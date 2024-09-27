import { Menu } from "@/utils/menu";
import MenuItem from "./MenuItem";

const HeaderMobileComponent = (): any => {
  return (
    <div className="flex flex-col gap-4">
      {Menu.map((item: any, index) => (
        <MenuItem key={index} value={item} />
      ))}
    </div>
  );
};

export default HeaderMobileComponent;

import { Menu } from "@/utils/menu";
import MenuItem from "./MenuItem";

const HeaderComponent = (): any => {
  return (
    <div className="hidden_header z-[104]">
      <div className="flex flex-row gap-4">
        {Menu.map((item: any, index) => (
          <MenuItem key={index} value={item} />
        ))}
      </div>
    </div>
  );
};

export default HeaderComponent;

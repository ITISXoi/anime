import { FCC } from "@/types";
import { usePathname } from "next/navigation";
import AuthLayout from "./auth-layout";
import MainLayout from "./main-layout";
import { authPathName } from "@/utils/common";

const Layout: FCC = ({ children }) => {
  const pathname = usePathname();

  if (!authPathName.includes(pathname)) {
    return <MainLayout>{children}</MainLayout>;
  }
  return <AuthLayout>{children}</AuthLayout>;
};

export default Layout;

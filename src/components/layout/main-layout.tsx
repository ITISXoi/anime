import { FCC } from "@/types";
import Header from "./header";
import Footer from "./footer";

const MainLayout: FCC = ({ children }) => {
  return (
    <>
      <Header />
      <main>
        <div className="content">{children}</div>
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;

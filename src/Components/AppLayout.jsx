import { Outlet } from "react-router";
import Nav from "./Nav";
import Footer from "./Footer";

function AppLayout({ children }) {
  return (
    <div className="relative bg-gradient-to-br from-[#151008] to-[#222831]">
      <Nav />
      {children}
      <Footer />
    </div>
  );
}

export default AppLayout;

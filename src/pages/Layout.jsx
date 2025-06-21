import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";

function Layout() {
  return (
    <div className="bg-[#F9F8FE]"> 
        <ScrollToTop />
        <Header />
        <Outlet />
        <Footer />
    </div>
  )
}

export default Layout
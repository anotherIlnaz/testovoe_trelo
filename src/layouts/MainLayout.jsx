import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar/Navbar";
import "./wrapper.css";

export const MainLayout = () => {
   return (
      <div className="wrapper">
         <Navbar />
         <Outlet />
      </div>
   );
};

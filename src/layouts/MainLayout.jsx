import { Navbar } from "../components/Navbar";
import { DeskContainer } from "../services/DesksService/DeskService.container";
import "./wrapper.css";

export const MainLayout = () => {
   return (
      <div className="wrapper">
         <Navbar />
         <DeskContainer />
      </div>
   );
};

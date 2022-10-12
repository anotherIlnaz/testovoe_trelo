import "./Navbar.css";
import { CreateColumnContainer } from "../../services/ColumnService/createColumnService/CreateColumnService.container";

export const Navbar = () => {
   return (
      <div className="navbarContainer">
         <div>Desk Name</div>
         <div className="advertising">Здесь могла быть ваша реклама</div>
         <CreateColumnContainer />
      </div>
   );
};

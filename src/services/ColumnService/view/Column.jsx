import { TaskContainer } from "../../TaskService/TaskService.container";
import { ColumnHeader } from "../view/components/ColumnHeader";
import { ColumnBottom } from "../view/components/ColumnBottom";
import "./Column.css";

export const Column = () => {
   return (
      <div className="columnWrapper">
         <ColumnHeader />
         <TaskContainer />
         <ColumnBottom />
      </div>
   );
};

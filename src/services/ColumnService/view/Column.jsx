import { ColumnHeader } from "../view/components/ColumnHeader";
import { ColumnBottom } from "../view/components/ColumnBottom";
import "./Column.css";
import { TasksListServiceContainer } from "../../TasksListService/TasksListService.container";

export const Column = ({
   column,
   deleteColumn,
   handleOpenCreateTaskModal,
   handleClickOnTask,
}) => {
   return (
      <div className="columnWrapper">
         <ColumnHeader
            columnName={column?.name}
            deleteColumn={deleteColumn}
            columnId={column?.id}
         />
         <TasksListServiceContainer
            columnId={column.id}
            handleClickOnTask={handleClickOnTask}
         />
         <ColumnBottom handleOpenCreateTaskModal={handleOpenCreateTaskModal} />
      </div>
   );
};

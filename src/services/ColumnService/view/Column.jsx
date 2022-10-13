import { ColumnHeader } from "../view/components/ColumnHeader";
import { ColumnBottom } from "../view/components/ColumnBottom";
import "./Column.css";
import { TasksListServiceContainer } from "../../TasksListService/TasksListService.container";

export const Column = ({
   column,
   deleteColumn,
   handleOpenCreateTaskModal,
   handleClickTask,
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
            handleClickTask={handleClickTask}
         />
         <ColumnBottom handleOpenCreateTaskModal={handleOpenCreateTaskModal} />
      </div>
   );
};

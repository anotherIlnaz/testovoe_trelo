import { ColumnHeader } from "../view/components/ColumnHeader";
import { ColumnBottom } from "../view/components/ColumnBottom";
import "./Column.css";
import { TasksListServiceContainer } from "../../TasksListService/TasksListService.container";

export const Column = ({
   column,
   deleteColumn,
   handleOpenCreateTaskModal,
   handleClickOnTask,
   handleMoveTask,
}) => {
   return (
      <div
         className="columnWrapper"
         onDragOver={(event) => {
            event.preventDefault();
            event.dataTransfer.move = "true";
         }}
         onDrop={(event) => {
            event.dataTransfer.dropEffect = "move";

            const payloadJson = event.dataTransfer.getData("payload");

            const payload = JSON.parse(payloadJson);

            handleMoveTask({ ...payload, columnId: column?.id });
         }}
      >
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

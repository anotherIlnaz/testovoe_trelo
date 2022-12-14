import { useColumnsListService } from "../ColumnsListService/columnsListService.hook";
import { Column } from "./view/Column";

export const ColumnContainer = ({
   column,
   handleOpenCreateTaskModal,
   handleClickOnTask,
   handleMoveTask,
}) => {
   const {
      events: { deleteColumn },
   } = useColumnsListService();

   return (
      <Column
         column={column}
         deleteColumn={deleteColumn}
         handleOpenCreateTaskModal={() => handleOpenCreateTaskModal(column.id)}
         handleClickOnTask={handleClickOnTask}
         handleMoveTask={handleMoveTask}
      />
   );
};

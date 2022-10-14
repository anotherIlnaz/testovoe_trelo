import {
   createColumn,
   removeColumnById,
   updateColumnById,
} from "../../models/Column";
import { useDeskService } from "../DesksService/DeskService.hook";

export const useColumnsListService = () => {
   const {
      data: { desk },
      events: { updateDesk },
   } = useDeskService();

   const columns = desk.columns;

   const addColumn = (name) => {
      const newColumn = createColumn(name);

      updateDesk((prevDesk) => ({
         ...prevDesk,
         columns: [...prevDesk.columns, newColumn],
      }));
   };

   const updateColumn = (id, callback) => {
      updateDesk((prevDesk) => ({
         ...prevDesk,
         columns: updateColumnById(prevDesk.columns, id, callback),
      }));
   };

   const deleteColumn = (columnId) => {
      updateDesk((prevDesk) => ({
         ...prevDesk,
         columns: removeColumnById(prevDesk.columns, columnId),
      }));
   };

   const handleMoveTask = ({
      taskId,
      columnId: columnMoveToId,
      columnMoveFromId,
   }) => {
      if (columnMoveToId === columnMoveFromId) return;

      const column = columns.find((column) => column.id === columnMoveFromId);

      const task = column.tasks.find((task) => task.id === taskId);

      if (!task) return;

      const taskCopy = { ...task, columnId: columnMoveToId };

      updateDesk((prevDesk) => ({
         ...prevDesk,
         columns: prevDesk.columns.map((column) => {
            if (column.id === columnMoveFromId) {
               return {
                  ...column,
                  tasks: column.tasks.filter((task) => task.id !== taskId),
               };
            }

            if (column.id === columnMoveToId) {
               return {
                  ...column,
                  tasks: [...column.tasks, taskCopy],
               };
            }

            return column;
         }),
      }));
   };

   return {
      data: { columns },
      events: { addColumn, deleteColumn, updateColumn, handleMoveTask },
   };
};

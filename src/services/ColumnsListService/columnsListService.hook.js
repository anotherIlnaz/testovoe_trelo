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

   return {
      data: { columns },
      events: { addColumn, deleteColumn, updateColumn },
   };
};

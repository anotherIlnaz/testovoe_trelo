import { useColumnsListService } from "../ColumnsListService/columnsListService.hook";

export const useDisplayTaskService = (columnId, taskId) => {
   const {
      data: { columns },
   } = useColumnsListService(columnId);

   const column = columns.find((column) => column.id === columnId);

   const getTask = () => {
      const task = column?.tasks.find((task) => task.id === taskId);

      return task;
   };

   return {
      data: { task: getTask(), column },
      events: { getTask },
   };
};

import { createTask, editTask, removeTask } from "../../models/Task";
import { useColumnsListService } from "../ColumnsListService/columnsListService.hook";

export const useTasksListService = (columnId) => {
   const {
      data: { columns },
      events: { updateColumn },
   } = useColumnsListService();

   const column = columns.find((column) => column.id === columnId);

   const handleCreateTask = ({ title, description }) => {
      const newTask = createTask(title, description, columnId);

      updateColumn(columnId, (prev) => ({
         ...prev,
         tasks: [...prev.tasks, newTask],
      }));
   };

   const handleUpdateTask = (
      taskId,
      { title, description, columnId: taskColumnId }
   ) => {
      updateColumn(columnId, (prev) => ({
         ...prev,
         tasks: prev.tasks.map((task) => {
            if (task.id !== taskId) return task;

            const editedTask = editTask(task, {
               title,
               description,
               columnId: taskColumnId,
            });

            return editedTask;
         }),
      }));
   };

   const handleDeleteTask = (taskId) => {
      updateColumn(columnId, (prev) => ({
         ...prev,
         tasks: removeTask(prev.tasks, taskId),
      }));
   };

   return {
      data: { tasks: column?.tasks || [] },
      events: { handleCreateTask, handleUpdateTask, handleDeleteTask },
   };
};

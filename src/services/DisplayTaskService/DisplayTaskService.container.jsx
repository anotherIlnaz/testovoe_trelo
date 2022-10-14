import { useTasksListService } from "../TasksListService/tasksListService.hook";
import { useDisplayTaskService } from "./displayTaskService.hook";
import { DisplayTaskModal } from "./view/DisplayTaskModal";

export const DislplayTaskContainer = ({
   isOpen,
   handleCloseModal,
   openedDisplayTaskPayload,
}) => {
   const taskId = openedDisplayTaskPayload?.taskId;
   const columnId = openedDisplayTaskPayload?.columnId;

   const {
      data: { task, column },
   } = useDisplayTaskService(columnId, taskId);

   const {
      events: { handleUpdateTask, handleDeleteTask },
   } = useTasksListService(columnId);

   if (!task) return null;

   return (
      <DisplayTaskModal
         isOpen={isOpen}
         handleCloseModal={handleCloseModal}
         task={task}
         column={column}
         handleUpdateTask={handleUpdateTask}
         handleDeleteTask={handleDeleteTask}
      />
   );
};

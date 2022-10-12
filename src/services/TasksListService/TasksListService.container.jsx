import { TaskContainer } from "../TaskService/TaskService.container";
import { useTasksListService } from "./tasksListService.hook";

export const TasksListServiceContainer = ({ columnId }) => {
   const {
      data: { tasks },
   } = useTasksListService(columnId);

   return (
      <>
         {tasks?.map((task) => (
            <TaskContainer task={task} />
         ))}
      </>
   );
};
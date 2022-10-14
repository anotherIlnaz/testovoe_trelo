import { TaskContainer } from "../TaskService/TaskService.container";
import { useTasksListService } from "./tasksListService.hook";

export const TasksListServiceContainer = ({ columnId, handleClickOnTask }) => {
   const {
      data: { tasks },
   } = useTasksListService(columnId);

   return (
      <>
         {tasks?.map((task, index) => (
            <TaskContainer
               task={task}
               handleClickOnTask={handleClickOnTask}
               key={task.id}
               index={index}
            />
         ))}
      </>
   );
};

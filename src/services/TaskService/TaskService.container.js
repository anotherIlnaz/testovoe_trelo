import { Task } from "./view/Task";

export const TaskContainer = ({ task, handleClickOnTask, index }) => {
   return (
      <Task task={task} handleClickOnTask={handleClickOnTask} index={index} />
   );
};

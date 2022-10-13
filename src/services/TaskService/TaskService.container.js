import { Task } from "./view/Task";

export const TaskContainer = ({ task, handleClickTask }) => {
   return <Task task={task} handleClickTask={handleClickTask} />;
};

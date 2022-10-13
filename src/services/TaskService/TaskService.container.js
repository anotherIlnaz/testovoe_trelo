import { Task } from "./view/Task";

export const TaskContainer = ({ task, handleClickOnTask }) => {
   return <Task task={task} handleClickOnTask={handleClickOnTask} />;
};

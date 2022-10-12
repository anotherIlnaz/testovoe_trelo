import "./task.css";

export const Task = ({ task }) => {
   return (
      <div className="taskWrapper">
         <div className="taskTitle">{task.title}</div>
         <div className="taskDescription">{task.description}</div>
      </div>
   );
};

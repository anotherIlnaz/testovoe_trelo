import "./task.css";

export const Task = ({ task, handleClickOnTask }) => {
   return (
      <div
         className="taskWrapper"
         onClick={() =>
            handleClickOnTask({ taskId: task.id, columnId: task.columnId })
         }
      >
         <div className="taskTitle">{task.title}</div>
         <div className="taskDescription">{task.description}</div>
      </div>
   );
};

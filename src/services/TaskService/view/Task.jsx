import "./task.css";

export const Task = ({ task, handleClickTask }) => {
   return (
      <div
         className="taskWrapper"
         onClick={() =>
            handleClickTask({ taskId: task.id, columnId: task.columnId })
         }
      >
         <div className="taskTitle">{task.title}</div>
         <div className="taskDescription">{task.description}</div>
      </div>
   );
};

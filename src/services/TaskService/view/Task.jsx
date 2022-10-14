import "./task.css";

export const Task = ({ task, handleClickOnTask }) => {
   return (
      <div
         draggable
         onDragStart={(event) => {
            event.dataTransfer.effectAllowed = "move";
            event.dataTransfer.setData(
               "payload",
               JSON.stringify({
                  taskId: task.id,
                  columnMoveFromId: task.columnId,
               })
            );

            event.target.style.opacity = "0.5";
         }}
         onDragEnd={(event) => (event.target.style.opacity = "1")}
         className="taskWrapper"
         onClick={() => handleClickOnTask(task.id)}
      >
         <div className="taskTitle">{task.title}</div>
         <div className="taskDescription">{task.description}</div>
      </div>
   );
};

import "./ColumnBottom.css";

export const ColumnBottom = ({ handleOpenCreateTaskModal }) => {
   return (
      <>
         <div className="addTask" onClick={handleOpenCreateTaskModal}>
            + Add Task
         </div>
      </>
   );
};

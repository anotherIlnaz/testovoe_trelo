import { useDisplayTaskService } from "./displayTaskService.hook";
import { DisplayTaskModal } from "./view/DisplayTaskModal";

export const DislplayTaskContainer = ({
   isOpen,
   handleCloseModal,
   openedDisplayTaskIdAndColumnId,
}) => {
   const taskId = openedDisplayTaskIdAndColumnId?.taskId;
   const columnId = openedDisplayTaskIdAndColumnId?.columnId;

   console.log(taskId, columnId);

   const {
      data: { task },
   } = useDisplayTaskService(columnId, taskId);

   return (
      <DisplayTaskModal
         isOpen={isOpen}
         handleCloseModal={handleCloseModal}
         task={task}
      />
   );
};

import { useTasksListService } from "../TasksListService/TasksListService.hook";
import { DisplayTaskModal } from "./view/DisplayTaskModal";

export const DislplayTaskContainer = ({ isOpen, handleCloseModal, openedDisplayTaskId }) => {
   

   return (
      <DisplayTaskModal isOpen={isOpen} handleCloseModal={handleCloseModal} openedDisplayTaskId={openedDisplayTaskId}/>
   );
};

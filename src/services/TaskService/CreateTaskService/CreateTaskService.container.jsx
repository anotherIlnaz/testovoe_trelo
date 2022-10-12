import { useTasksListService } from "../../TasksListService/tasksListService.hook";
import { CreateTaskModal } from "./view/CreateTaskModal";

export const CreateTaskContainer = ({
   isOpen,
   handleCloseModal,
   openedModalColumnId,
}) => {
   const {
      events: { handleCreateTask },
   } = useTasksListService(openedModalColumnId);

   return (
      <>
         <CreateTaskModal
            isOpen={isOpen}
            handleCloseModal={handleCloseModal}
            handleCreateTask={(payload) => {
               handleCreateTask(payload);

               handleCloseModal();
            }}
         />
      </>
   );
};

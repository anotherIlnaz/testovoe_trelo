import { Modal } from "../../../components/Modal/Modal";

export const DisplayTaskModal = ({
   isOpen,
   handleCloseModal,
   task,
   openedDisplayTaskId
}) => {
   return (
      <>
         <Modal isOpen={isOpen} handleClose={handleCloseModal}>
            {task}
         </Modal>
      </>
   );
};

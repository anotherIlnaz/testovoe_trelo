import { Modal } from "../../../components/Modal/Modal";
import { Input } from "../../../components/Input/Input";

export const DisplayTaskModal = ({ isOpen, handleCloseModal, task }) => {
   return (
      <>
         <Modal isOpen={isOpen} handleClose={handleCloseModal}>
            <Input placeholder={task.title} />
         </Modal>
      </>
   );
};

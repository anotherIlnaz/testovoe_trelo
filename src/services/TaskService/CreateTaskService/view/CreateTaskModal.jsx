import { Modal } from "../../../../components/Modal/Modal";
import { Input } from "../../../../components/Input/Input";
import { useEffect, useState } from "react";

export const CreateTaskModal = ({
   isOpen,
   handleCloseModal,
   handleCreateTask,
}) => {
   const [formData, setFormData] = useState({
      title: "",
      description: "",
   });

   useEffect(() => {
      if (!isOpen) {
         setFormData({
            title: "",
            description: "",
         });
      }
   }, [isOpen]);

   const onChange = (name, value) => {
      setFormData((prev) => ({ ...prev, [name]: value }));
   };

   const getOnChange = (name) => {
      return (value) => onChange(name, value);
   };

   return (
      <>
         <Modal
            name="Create task"
            isOpen={isOpen}
            handleClose={handleCloseModal}
            onSave={() => handleCreateTask(formData)}
         >
            <Input
               placeholder="Title"
               value={formData.title}
               onChange={getOnChange("title")}
            />
            <Input
               placeholder="Description"
               value={formData.description}
               onChange={getOnChange("description")}
            />
         </Modal>
      </>
   );
};

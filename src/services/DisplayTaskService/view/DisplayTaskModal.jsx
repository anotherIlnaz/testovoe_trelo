import { Modal } from "../../../components/Modal/Modal";
import { Input } from "../../../components/Input/Input";
import { useState } from "react";
import { Button, ButtonType } from "../../../components/Button/Button";

export const DisplayTaskModal = ({
   isOpen,
   handleCloseModal,
   task,
   column,
   handleUpdateTask,
   handleDeleteTask,
}) => {
   const [patchFormData, setPatchFormData] = useState({
      title: task?.title,
      description: task?.description,
   });

   console.log(isOpen);

   return (
      <>
         <Modal
            bottomContent={<Button type={ButtonType.danger}>Delete</Button>}
            onDelete={() => handleDeleteTask(task.id)}
            onSave={() => {
               handleUpdateTask(task.id, patchFormData);
               handleCloseModal();
            }}
            name={
               <div
                  style={{
                     display: "flex",
                     alignItems: "center",
                  }}
               >
                  {column.name && (
                     <div
                        style={{
                           fontSize: "14px",
                           border: "1px solid  #2e32a5",
                           color: "#2e32a5",
                           borderRadius: "6px",
                           padding: "1px 5px",
                           marginRight: "10px",
                           fontWeight: "bold",
                        }}
                     >
                        {column.name}
                     </div>
                  )}
                  <span style={{ fontSize: "16px" }}> №{task.id} </span>
               </div>
            }
            isOpen={isOpen}
            handleClose={handleCloseModal}
         >
            <Input
               placeholder="task title"
               value={patchFormData.title}
               onChange={(value) =>
                  setPatchFormData((prev) => ({ ...prev, title: value }))
               }
            />
            <Input
               placeholder="task description"
               value={patchFormData.description}
               onChange={(value) =>
                  setPatchFormData((prev) => ({ ...prev, description: value }))
               }
            />
         </Modal>
      </>
   );
};

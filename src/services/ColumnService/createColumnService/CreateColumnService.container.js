import { useState } from "react";
import { Button } from "../../../components/Button/Button";
import "./createColumnService.container.css";
import { Modal } from "../../../components/Modal/Modal";
import { Input } from "../../../components/Input/Input";
import { useColumnsListService } from "../../ColumnsListService/columnsListService.hook";

export const CreateColumnContainer = () => {
   const [isOpen, setIsOpen] = useState(false);
   const [name, setName] = useState("");

   const {
      events: { addColumn },
   } = useColumnsListService();

   return (
      <div>
         <Button onClick={() => setIsOpen(true)}>Add column</Button>
         <Modal
            name="Create column"
            onSave={() => {
               addColumn(name);
               setIsOpen(false);
               setName("");
            }}
            isOpen={isOpen}
            handleClose={() => setIsOpen(false)}
         >
            <Input value={name} onChange={setName} placeholder="Name..." />
         </Modal>
      </div>
   );
};

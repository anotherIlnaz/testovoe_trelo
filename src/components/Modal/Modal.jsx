import { Button } from "../Button/Button";
import "./Modal.css";

export const Modal = ({ isOpen, handleClose, children, onSave, name }) => {
   if (!isOpen) return null;

   return (
      <div className="modalWrapper">
         <div className="modalWindow">
            <div className="modalLayout">
               <div className="modalHeader">
                  <div className="modalAddColumn">{name}</div>
                  <div className="modalClose" onClick={handleClose}>
                     Сlose
                  </div>
               </div>
               <div>{children}</div>

               <div className="modalBottom">
                  <Button onClick={onSave}>Save</Button>
               </div>
            </div>
         </div>
      </div>
   );
};

import { Button } from "../Button/Button";
import "./Modal.css";

export const Modal = ({ isOpen, handleClose, children, onSave }) => {
   if (!isOpen) return null;

   return (
      <div className="modalWrapper">
         <div className="modalWindow">
            <div className="modalLayout">
               <div className="modalHeader">
                  <div className="modalAddColumn">Add Column</div>
                  <div className="modalClose" onClick={handleClose}>
                     Сlose
                  </div>
               </div>
               <div>{children}</div>

               <div className="modalBottom">
                  <Button onClick={onSave}>Coздать</Button>
               </div>
            </div>
         </div>
      </div>
   );
};

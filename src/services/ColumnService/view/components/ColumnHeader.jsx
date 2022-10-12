import "./ColumnHeader.css";

export const ColumnHeader = ({ columnName, deleteColumn, columnId }) => {
   return (
      <div className="columnHeaderContainer">
         <div className="columnName">{columnName}</div>
         <div onClick={() => deleteColumn(columnId)} className="columnDelete">
            X
         </div>
      </div>
   );
};
